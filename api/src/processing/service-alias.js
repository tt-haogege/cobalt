const friendlyNames = {
    bsky: "bluesky",
    douyin: "抖音",
    twitch: "twitch clips"
}

export const friendlyServiceName = (service) => {
    if (service in friendlyNames) {
        return friendlyNames[service];
    }
    return service;
}
