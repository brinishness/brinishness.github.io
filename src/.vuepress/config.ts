import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {copyrightPlugin} from "vuepress-plugin-copyright2";
// import {autoCatalogPlugin} from "vuepress-plugin-auto-catalog";
// import {pwaPlugin} from "vuepress-plugin-pwa2";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "en-US",
            title: "brinishness",
            description: "Summary of development experience",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "brinishness",
            description: "开发经验总结",
        },
    },

    theme,
    plugins: [
        searchProPlugin({
            indexContent: true,
            customFields: [
                {
                    getter: (page) => page.frontmatter.category,
                    formatter: {
                        "/": "Category: $content",
                        "/zh/": "分类：$content",
                    },
                },
                {
                    getter: (page) => page.frontmatter.tag,
                    formatter: {
                        "/": "Tag: $content",
                        "/zh/": "标签：$content",
                    },
                },
            ],
        }),
        copyrightPlugin({
            author: "brinishness",
            license: "MIT",
            canonical: "https://brinishness.eu.org",
            global: true,
            triggerWords: 5,
            locales: {
                "/": {
                    // 覆盖链接文字
                    link: "Original text published on :link",
                },

                "/zh/": {
                    link: "原文发表于 :link",
                    // 在这里完整设置 `mm-NN` 的多语言配置
                },
            },
        }),
        // autoCatalogPlugin({
        //     //插件选项
        // }),
        // pwaPlugin({
        //     你的选项
        // })
    ],
    // Enable it with pwa
    // shouldPrefetch: false,
});
