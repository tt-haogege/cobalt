<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import { contacts, docs } from "$lib/env";

    import SectionHeading from "$components/misc/SectionHeading.svelte";
</script>

<section id="summary">
<SectionHeading
    title={$t("about.heading.summary")}
    sectionId="summary"
/>

cobalt 帮你保存你喜欢的网站上的任何内容：视频、音频、图片或 GIF。只需粘贴链接，即刻开始！

没有广告、追踪器、付费墙或其他烦人的东西。只是一个方便的 Web 应用，随时随地为你服务。
</section>

<section id="motivation">
<SectionHeading
    title={$t("about.heading.motivation")}
    sectionId="motivation"
/>

cobalt 是为公共利益而创建的，旨在保护人们免受替代下载器推送的广告和恶意软件的侵害。
我们相信最好的软件应该是安全、开源和无障碍的。所有 imput 项目都遵循这些基本原则。
</section>

<section id="privacy-efficiency">
<SectionHeading
    title={$t("about.heading.privacy_efficiency")}
    sectionId="privacy-efficiency"
/>

所有发送到后端的请求都是匿名的，所有关于潜在文件隧道的信息都是加密的。
我们有严格的零日志政策，不存储或追踪任何个人信息。

如果请求需要额外处理，如转封装或转码，cobalt 会直接在你的设备上处理媒体。
这确保了最佳的效率和隐私。

如果你的设备不支持本地处理，则会使用基于服务器的实时处理。
在这种情况下，处理后的媒体会直接流式传输到客户端，不会存储在服务器的磁盘上。

你可以[启用强制隧道](/settings/privacy#tunnel)以进一步增强隐私。
启用后，cobalt 会隧道传输所有下载的文件，而不仅仅是需要隧道的文件。
没有人会知道你从哪里下载了什么，甚至你的网络运营商也不会。
他们能看到的只是你在使用一个 cobalt 实例。
</section>

<section id="community">
<SectionHeading
    title={$t("about.heading.community")}
    sectionId="community"
/>

cobalt 被无数艺术家、教育者和内容创作者使用，帮助他们做自己热爱的事情。
我们始终与社区保持联系，共同努力让 cobalt 更加实用。
欢迎[加入讨论](/about/community)！

我们相信互联网的未来是开放的，这就是为什么 cobalt 是
[源码优先](https://sourcefirst.com/)且[易于自托管]({docs.instanceHosting})的。

如果你的朋友托管了一个处理实例，只需向他们要域名并[在实例设置中添加](/settings/instances#community)即可。

你可以随时在 [GitHub]({contacts.github}) 上查看源代码并贡献代码。
我们欢迎所有贡献和建议！
</section>
