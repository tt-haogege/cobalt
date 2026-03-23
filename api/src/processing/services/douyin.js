import { resolveRedirectingURL } from "../url.js";
import { createStream } from "../../stream/manage.js";

const mobileUA = "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36";

function extractRouterData(html) {
    const marker = html.indexOf('_ROUTER_DATA');
    if (marker === -1) return null;

    const rest = html.substring(marker);
    const jsonStart = rest.indexOf('{');
    if (jsonStart === -1) return null;

    let depth = 0;
    for (let i = jsonStart; i < rest.length; i++) {
        if (rest[i] === '{') depth++;
        else if (rest[i] === '}') depth--;
        if (depth === 0) {
            return JSON.parse(rest.substring(jsonStart, i + 1));
        }
    }

    return null;
}

export default async function({ id, shortLink, toutiao, userId, url, dispatcher }) {
    let videoId = id;

    if (!videoId && toutiao) {
        const patternMatch = await resolveRedirectingURL(
            `https://m.toutiao.com/is/${toutiao}`,
            dispatcher
        );
        videoId = patternMatch?.id;
    }

    if (!videoId && shortLink) {
        const patternMatch = await resolveRedirectingURL(
            url.href,
            dispatcher
        );
        videoId = patternMatch?.id;
    }

    if (!videoId) return { error: "fetch.short_link" };

    const res = await fetch(`https://www.iesdouyin.com/share/video/${videoId}/`, {
        headers: {
            "user-agent": mobileUA,
        },
        dispatcher,
    });

    const html = await res.text();

    let item;
    try {
        const data = extractRouterData(html);
        item = data?.loaderData?.["video_(id)/page"]?.videoInfoRes?.item_list?.[0];
    } catch {}

    if (!item) return { error: "fetch.empty" };

    const authorId = item.author?.unique_id
        || item.author?.short_id
        || "unknown";

    const filenameBase = `douyin_${authorId}_${videoId}`;

    if (item.images?.length) {
        if (item.images.length === 1) {
            return {
                isPhoto: true,
                urls: item.images[0].url_list?.[0],
                filename: `${filenameBase}.jpg`,
            };
        }

        const picker = item.images.map((img, i) => ({
            type: "photo",
            url: createStream({
                service: "douyin",
                type: "proxy",
                url: img.url_list?.[0],
                filename: `${filenameBase}_${i + 1}.jpg`,
            }),
        }));

        return { picker };
    }

    const video = item.video;
    if (!video) return { error: "fetch.empty" };

    const playAddr = video.play_addr;
    if (!playAddr?.url_list?.length) return { error: "fetch.empty" };

    let videoUrl = playAddr.url_list[0]
        .replace(/^http:/i, 'https:')
        .replace('/playwm/', '/play/');

    return {
        urls: videoUrl,
        filename: `${filenameBase}.mp4`,
    };
}
