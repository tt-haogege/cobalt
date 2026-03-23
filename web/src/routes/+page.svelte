<script>
    import { t } from "$lib/i18n/translations";

    import Omnibox from "$components/save/Omnibox.svelte";
    import Meowbalt from "$components/misc/Meowbalt.svelte";
    import SupportedServices from "$components/save/SupportedServices.svelte";
</script>

<svelte:head>
    <title>{$t("general.cobalt")}</title>
    <meta property="og:title" content={$t("general.cobalt")} />
</svelte:head>

<div id="cobalt-save-container" class="center-column-container">
    <SupportedServices />
    <main
        id="cobalt-save"
        tabindex="-1"
        data-first-focus
    >
        <Meowbalt emotion="smile" />
        <Omnibox />
    </main>
    
    <div id="credit-section">
        <img
            id="credit-qrcode"
            src="/qrcode.png"
            alt="前端仔玩儿nas"
            draggable="false"
        />
        <p id="credit-text">
            基于 <a
                href="https://github.com/imputnet/cobalt"
                target="_blank"
                rel="noopener noreferrer"
                class="cobalt-link">cobalt</a> 修改 · 新增抖音解析
            <br />
            by 前端仔玩儿nas · 扫码关注 一起折腾
        </p>
    </div>
    <div id="terms-note">
        {$t("save.terms.note.agreement")}
        <a href="/about/terms">{$t("save.terms.note.link")}</a>
    </div>
</div>

<style>
    #cobalt-save-container {
        padding: var(--padding);
        overflow: hidden;
    }

    #cobalt-save {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 15px;
    }

    #terms-note {
        bottom: 0;
        color: var(--gray);
        font-size: 12px;
        text-align: center;
        padding-bottom: 6px;
        font-weight: 500;
    }

    #credit-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 16px 0 12px;
        margin-top: 6px;
        border-top: 1px solid var(--content-border);
    }

    #credit-qrcode {
        width: 120px;
        height: 120px;
        border-radius: 8px;
        pointer-events: auto;
    }

    #credit-text {
        margin: 0;
        color: var(--gray);
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        line-height: 1.6;
        max-width: 320px;
        user-select: text;
        -webkit-user-select: text;
    }

    .cobalt-link {
        color: var(--secondary);
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    @media screen and (max-width: 535px) {
        #cobalt-save-container {
            padding-top: calc(var(--padding) / 2);
        }

        #terms-note {
            font-size: 11px;
            padding-bottom: 0;
        }

        #credit-qrcode {
            width: 100px;
            height: 100px;
        }

        #credit-text {
            font-size: 11px;
            max-width: 280px;
        }
    }
</style>
