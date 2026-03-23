import { derived } from 'svelte/store';

import languages from '$i18n/languages.json';

import settings from '$lib/state/settings';
import { device } from '$lib/device';
import { INTERNAL_locale, defaultLocale } from '$lib/i18n/translations';

const supportedLocales = Object.keys(languages);

const resolveLocale = (lang: string): string | undefined => {
    if (supportedLocales.includes(lang)) return lang;

    const lower = lang.toLowerCase();
    const match = supportedLocales.find(
        (l: string) => l.toLowerCase() === lower
    );
    if (match) return match;

    const prefix = lower.split('-')[0];
    return supportedLocales.find(
        (l: string) => l.toLowerCase().startsWith(prefix + '-')
    ) ?? supportedLocales.find(
        (l: string) => l.toLowerCase() === prefix
    );
};

export default derived(
    settings,
    ($settings) => {
        let currentLocale = defaultLocale;

        if ($settings.appearance.autoLanguage) {
            const resolved = resolveLocale(device.prefers.language);
            if (resolved) currentLocale = resolved;
        } else {
            const resolved = resolveLocale($settings.appearance.language);
            if (resolved) currentLocale = resolved;
        }

        INTERNAL_locale.set(currentLocale);
        return currentLocale;
    }
);
