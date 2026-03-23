<script lang="ts">
    import { contacts, docs, partners } from "$lib/env";
    import { t } from "$lib/i18n/translations";

    import SectionHeading from "$components/misc/SectionHeading.svelte";
    import BetaTesters from "$components/misc/BetaTesters.svelte";
</script>

<section id="imput">
<SectionHeading
    title="imput"
    sectionId="imput"
/>

cobalt 由 [imput](https://imput.net/) 用爱打造 ❤️

我们是一个只有两个人的小团队，但我们非常努力地开发对每个人都有益的优秀软件。
如果你喜欢我们的工作，请考虑在[捐赠页面](/donate)支持我们！
</section>

<section id="testers">
<SectionHeading
    title={$t("about.heading.testers")}
    sectionId="testers"
/>

特别感谢我们的测试人员提前测试更新并确保其稳定性。
他们也帮助我们发布了 cobalt 10！
<BetaTesters />

所有链接都是外部链接，指向他们的个人网站或社交媒体。
</section>

<section id="partners">
<SectionHeading
    title={$t("about.heading.partners")}
    sectionId="partners"
/>

cobalt 的部分处理基础设施由我们的长期合作伙伴
[royalehosting.net]({partners.royalehosting}) 提供！
</section>

<section id="meowbalt">
<SectionHeading
    title={$t("general.meowbalt")}
    sectionId="meowbalt"
/>

meowbalt 是 cobalt 的高速吉祥物，一只非常有表现力的猫，热爱高速网络。

你在 cobalt 中看到的所有精彩的 meowbalt 插画
都是由 [GlitchyPSI](https://glitchypsi.xyz/) 创作的。
他也是这个角色的原创者。

imput 持有 meowbalt 角色设计的法律权利，
但不包括由 GlitchyPSI 创作的特定艺术作品。

我们很喜欢 meowbalt，所以我们必须制定一些规则来保护他：
- 你不能以同人作品以外的任何形式使用 meowbalt 的角色设计。
- 你不能将 meowbalt 的设计或作品用于商业用途。
- 你不能在自己的项目中使用 meowbalt 的设计或作品。
- 你不能以任何形式使用或修改 GlitchyPSI 创作的 meowbalt 作品。

如果你创作了 meowbalt 的同人作品，请在
[我们的 Discord 服务器](/about/community)中分享，我们很想看看！
</section>

<section id="licenses">
<SectionHeading
    title={$t("about.heading.licenses")}
    sectionId="licenses"
/>

cobalt API（处理服务器）代码是开源的，使用 [AGPL-3.0]({docs.apiLicense}) 许可证。

cobalt 前端代码是[源码优先](https://sourcefirst.com/)的，使用 [CC-BY-NC-SA 4.0]({docs.webLicense}) 许可证。

我们不得不将前端设为源码优先，以阻止投机者利用我们的工作牟利，
以及阻止创建欺骗用户和损害我们公共形象的恶意克隆。
除了商业用途外，它遵循与许多开源许可证相同的原则。

我们依赖许多开源库，但也创建和发布自己的库。
你可以在 [GitHub]({contacts.github}) 上查看完整的依赖列表！
</section>
