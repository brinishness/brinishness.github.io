import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
// import {autoCatalogPlugin} from "vuepress-plugin-auto-catalog";
// import {pwaPlugin} from "vuepress-plugin-pwa2";
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    head: [
        [
            'script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?265d55555532340fa9a3fa5325768561";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();    
        `
        ]
    ],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "小明的个人博客",
            description: "小明的个人博客",
        },
        // "/zh/": {
        //     lang: "zh-CN",
        //     title: "brinishness",
        //     description: "开发经验总结",
        // },
    },

    lang: "zh-CN",

    shouldPrefetch: false,

    theme,
    plugins: [
        searchProPlugin({
            indexContent: true,
            customFields: [
                {
                    getter: (page) => "page.frontmatter.category",
                    formatter: {
                        "/": "分类: $content",
                        // "/zh/": "分类：$content",
                    },
                },
                {
                    getter: (page) => "page.frontmatter.tag",
                    formatter: {
                        "/": "标签: $content",
                        // "/zh/": "标签：$content",
                    },
                },
            ],
        }),
        googleAnalyticsPlugin({
            id: "G-0J6B2RLZVN",
        })
    ],
    // Enable it with pwa
    // shouldPrefetch: false,
});
