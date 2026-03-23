<script lang="ts">
    import env from "$lib/env";
    import { t } from "$lib/i18n/translations";

    import SectionHeading from "$components/misc/SectionHeading.svelte";
</script>

<section id="general">
<SectionHeading
    title={$t("about.heading.general")}
    sectionId="general"
/>

cobalt 的隐私政策很简单：我们不收集或存储你的任何信息。
你做什么完全是你自己的事，与我们或其他任何人无关。

这些条款仅在使用官方 cobalt 实例时适用。
在其他情况下，你可能需要联系实例托管者获取准确信息。
</section>

<section id="local">
<SectionHeading
    title={$t("about.heading.local")}
    sectionId="local"
/>

使用设备端处理的工具在本地离线运行，
不会将任何处理过的数据发送到任何地方。
在适用的情况下，它们会被明确标注。
</section>

<section id="saving">
<SectionHeading
    title={$t("about.heading.saving")}
    sectionId="saving"
/>

使用保存功能时，cobalt 可能需要代理或转封装/转码文件。
如果是这种情况，会为此创建一个临时隧道，
所需的最少媒体信息会存储 90 秒。

在未修改的官方 cobalt 实例上，
**所有隧道数据都使用只有最终用户才能访问的密钥加密**。

加密的隧道数据可能包括：
- 来源服务的名称。
- 媒体文件的原始 URL。
- 区分不同处理类型所需的内部参数。
- 最少的文件元数据（生成的文件名、标题、作者、创建年份、版权信息）。
- 在隧道过程中 URL 失败时可能使用的原始请求的最少信息。

这些数据会在 90 秒后从服务器内存中不可逆地清除。
只要 cobalt 的源代码未被修改，任何人（包括实例所有者）都无法访问缓存的隧道数据。

隧道中的媒体数据永远不会被存储/缓存。
一切都是实时处理的，包括转封装和转码。
cobalt 隧道的工作方式类似于匿名代理。

如果你的设备支持本地处理，
加密的隧道信息包含的信息更少，因为它会返回给客户端处理。

在 [GitHub 上查看相关源代码](https://github.com/imputnet/cobalt/tree/main/api/src/stream)
以了解更多工作原理。
</section>

<section id="encryption">
<SectionHeading
    title={$t("about.heading.encryption")}
    sectionId="encryption"
/>

临时存储的隧道数据使用 AES-256 标准加密。
解密密钥仅包含在访问链接中，永远不会被记录/缓存/存储。
只有最终用户才能访问链接和加密密钥。
每个请求的隧道都会生成唯一的密钥。
</section>

{#if env.PLAUSIBLE_ENABLED}
<section id="plausible">
<SectionHeading
    title={$t("about.heading.plausible")}
    sectionId="plausible"
/>

我们使用 [Plausible](https://plausible.io/) 来获取 cobalt 活跃用户的大致数量，
完全匿名。关于你或你的请求的任何可识别信息都不会被存储。
所有数据都是匿名和聚合的。
我们自托管和管理 cobalt 使用的 [Plausible 实例](https://{env.PLAUSIBLE_HOST}/)。

Plausible 不使用 cookie，完全符合 GDPR、CCPA 和 PECR。

如果你希望退出匿名分析，可以在[隐私设置](/settings/privacy#analytics)中操作。
如果你选择退出，Plausible 脚本将完全不会加载。

[了解更多关于 Plausible 对隐私保护的承诺](https://plausible.io/privacy-focused-web-analytics)。
</section>
{/if}

<section id="cloudflare">
<SectionHeading
    title={$t("about.heading.cloudflare")}
    sectionId="cloudflare"
/>

我们使用 Cloudflare 服务来：
- DDoS 和滥用防护。
- 机器人防护（Cloudflare Turnstile）。
- 托管和部署静态渲染的 Web 应用（Cloudflare Workers）。

这些都是为每个人提供最佳体验所必需的。
Cloudflare 是我们所知的所有上述解决方案中最注重隐私和最可靠的提供商。

Cloudflare 完全符合 GDPR 和 HIPAA。

[了解更多关于 Cloudflare 对隐私保护的承诺](https://www.cloudflare.com/trust-hub/privacy-and-data-protection/)。
</section>
