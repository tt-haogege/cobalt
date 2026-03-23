import env from "$lib/env";
import { browser } from "$app/environment";
import { get } from "svelte/store";
import settings from "$lib/state/settings";

export const currentApiURL = () => {
    const processingSettings = get(settings).processing;
    const customInstanceURL = processingSettings.customInstanceURL;

    if (processingSettings.enableCustomInstances && customInstanceURL.length > 0) {
        return new URL(customInstanceURL).origin;
    }

    if (browser) {
        return window.location.origin;
    }

    return new URL(env.DEFAULT_API!).origin;
}

export const rewriteTunnelUrl = (url: string): string => {
    if (!browser) return url;
    try {
        const parsed = new URL(url);
        if (parsed.pathname === '/tunnel') {
            return `${window.location.origin}${parsed.pathname}${parsed.search}`;
        }
    } catch { /* not a valid URL, return as-is */ }
    return url;
}
