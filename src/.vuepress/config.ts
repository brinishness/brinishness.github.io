import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
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

    shouldPrefetch: false,

    theme,
    plugins: [
        searchProPlugin({
            indexContent: true,
            customFields: [
                {
                    getter: (page) => "page.frontmatter.category",
                    formatter: {
                        "/": "Category: $content",
                        "/zh/": "分类：$content",
                    },
                },
                {
                    getter: (page) => "page.frontmatter.tag",
                    formatter: {
                        "/": "Tag: $content",
                        "/zh/": "标签：$content",
                    },
                },
            ],
        }),
    ],
    // Enable it with pwa
    // shouldPrefetch: false,
});
