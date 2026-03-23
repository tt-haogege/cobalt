<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import SectionHeading from "$components/misc/SectionHeading.svelte";
</script>

<section id="general">
<SectionHeading
    title={$t("about.heading.general")}
    sectionId="general"
/>

这些条款仅在使用官方 cobalt 实例时适用。
在其他情况下，你可能需要联系实例托管者获取准确信息。
</section>

<section id="saving">
<SectionHeading
    title={$t("about.heading.saving")}
    sectionId="saving"
/>

保存功能简化了从互联网下载内容的过程，
我们对保存的内容被用于何种用途不承担任何责任。

处理服务器的工作方式类似于高级代理，不会将任何请求的内容写入磁盘。
一切都在内存中处理，隧道完成后会被永久清除。
我们没有下载日志，无法识别任何人。

你可以在[隐私政策](/about/privacy)中了解更多关于隧道工作原理的信息。
</section>

<section id="responsibility">
<SectionHeading
    title={$t("about.heading.responsibility")}
    sectionId="responsibility"
/>

你（最终用户）对你使用我们工具所做的事情以及如何使用和分发所获得的内容负责。
使用他人内容时请保持谨慎，始终注明原创作者。
确保你不违反任何条款或许可证。

用于教育目的时，请始终引用来源并注明原创作者。

合理使用和注明出处对每个人都有益。
</section>

<section id="abuse">
<SectionHeading
    title={$t("about.heading.abuse")}
    sectionId="abuse"
/>

由于 cobalt 是完全匿名的，我们无法自动检测滥用行为。
但是，你可以通过电子邮件向我们报告此类活动，我们会尽力手动处理：abuse[at]imput.net

**此邮箱不用于用户支持，如果你的问题与滥用无关，你将不会收到回复。**

如果你遇到问题，可以通过[社区页面](/about/community)上的任何方式寻求支持。
</section>
