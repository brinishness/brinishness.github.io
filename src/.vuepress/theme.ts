import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

const MR_HOPE_AVATAR = '<svg t="1681170903257" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="993" width="200" height="200"><path d="M165.44 79.573333c52.586667-57.813333 133.973333 5.546667 171.093333 51.733334-3.84 1.92-11.413333 5.653333-15.253333 7.573333-35.84-25.92-74.133333-72.533333-123.093333-58.346667-54.506667 45.76-35.413333 125.973333-36.266667 188.373334-2.346667 4.053333-6.933333 12.266667-9.28 16.426666-26.453333-63.36-19.733333-144.853333 12.8-205.76zM660.053333 123.306667c65.173333-25.706667 139.733333-93.653333 210.24-44.48 46.08 61.013333 50.346667 156.906667 15.146667 223.786666l-10.24-19.626666c7.786667-68.266667 29.653333-166.293333-45.866667-205.013334-52.906667 4.8-96.853333 39.146667-146.24 55.573334l-23.04-10.24z" fill="#E28F02" opacity=".98" p-id="994"></path><path d="M198.186667 80.533333c48.96-14.186667 87.253333 32.426667 123.093333 58.346667-35.84 23.04-69.44 49.173333-103.253333 74.986667-12.053333-24.853333-25.173333-50.133333-47.466667-67.52-5.44 34.346667-2.026667 69.013333 2.133333 103.253333-2.773333 4.8-8.106667 14.506667-10.773333 19.306667 0.853333-62.4-18.24-142.613333 36.266667-188.373334zM683.093333 133.546667c49.386667-16.426667 93.333333-50.773333 146.24-55.573334 75.52 38.72 53.653333 136.746667 45.866667 205.013334-2.133333-3.52-6.4-10.666667-8.533333-14.186667-1.493333-41.92 4.586667-88.746667-22.72-124.266667-21.12 16.533333-19.84 48.426667-28.266667 72.213334-39.786667-34.133333-84.48-62.4-132.586667-83.2z" fill="#F0AD54" p-id="995"></path><path d="M336.533333 131.306667c100.586667-42.24 222.08-53.226667 323.52-8l23.04 10.24c48.106667 20.8 92.8 49.066667 132.586667 83.2 16.64 17.706667 33.706667 34.88 50.986667 52.053333 2.133333 3.52 6.4 10.666667 8.533333 14.186667l10.24 19.626666c38.08 66.88 63.786667 141.973333 62.72 219.626667 8.853333 162.56-87.36 322.24-230.293333 397.653333-161.6 88.106667-379.413333 59.413333-508.8-73.066666-151.253333-141.546667-176-392.533333-56.426667-561.493334 2.346667-4.16 6.933333-12.373333 9.28-16.426666 2.666667-4.8 8-14.506667 10.773333-19.306667 14.826667-12.16 30.293333-23.68 45.333334-35.733333 33.813333-25.813333 67.413333-51.946667 103.253333-74.986667 3.84-1.92 11.413333-5.653333 15.253333-7.573333m57.493334 4.906666c-63.466667 17.28-96.746667 91.626667-85.12 152.853334-17.706667 3.306667-31.04 16.32-44.053334 27.733333-48.32 5.333333-99.2 37.44-106.453333 88.853333-2.133333 45.76 38.4 77.653333 77.12 92.8-3.306667 2.88-10.026667 8.746667-13.333333 11.733334-38.933333-2.026667-77.973333-4.053333-116.8 0.426666-5.44 40.96-4.053333 82.773333 3.306666 123.413334 0.106667 0.746667 0.426667 2.346667 0.64 3.093333 10.773333 49.92 37.546667 94.186667 64.213334 136.96 0.426667 0.533333 1.173333 1.706667 1.6 2.24 35.84 45.226667 75.733333 96.533333 134.293333 111.36 55.253333 47.146667 131.52 60.053333 202.56 51.2 70.506667 7.146667 162.026667-4.373333 209.493333-51.733333 60.266667-18.666667 98.346667-75.84 138.133334-121.386667l1.6-2.346667c24.426667-35.093333 41.706667-74.666667 52.8-115.946666 0.213333-0.746667 0.64-2.24 0.746666-2.986667 4.053333-18.56 7.04-37.546667 6.08-56.64l9.706667 0.106667c7.36-138.24-42.56-285.12-152.426667-374.08-103.36-87.573333-254.933333-128.32-384.106666-77.653334z" fill="#FFCE74" p-id="996"></path><path d="M394.026667 136.213333c129.173333-50.666667 280.746667-9.92 384.106666 77.653334 109.866667 88.96 159.786667 235.84 152.426667 374.08l-9.706667-0.106667c-2.026667-16.533333-3.84-33.066667-7.253333-49.28-35.626667 0.64-72.213333 10.026667-106.986667-2.026667-49.386667-13.866667-103.573333-41.066667-153.813333-14.933333-56.106667 38.4-112.64-4.586667-165.546667-24.96-51.946667-19.093333-94.08 25.066667-141.866666 36.266667-39.466667-14.933333-81.28-20.693333-123.2-22.72 3.306667-2.986667 10.026667-8.853333 13.333333-11.733334 73.173333 17.813333 160.533333-17.386667 168.533333-100.053333 11.946667-32.64 13.973333-68.586667 3.52-101.866667-32.32-7.573333-65.706667-6.72-98.666666-7.466666-11.626667-61.226667 21.653333-135.573333 85.12-152.853334m134.08 167.466667c-12.16 44.053333 2.666667 88.96 34.346666 120.64 43.2 101.653333 205.653333 107.946667 267.52 21.653333 21.12-29.973333 4.373333-70.826667-21.76-91.733333-33.813333-31.04-81.6-37.44-125.653333-36.16-44.266667-28.373333-109.12-54.933333-154.453333-14.4zM170.56 146.346667c22.293333 17.386667 35.413333 42.666667 47.466667 67.52-15.04 12.053333-30.506667 23.573333-45.333334 35.733333-4.16-34.24-7.573333-68.906667-2.133333-103.253333zM815.68 216.746667c8.426667-23.786667 7.146667-55.68 28.266667-72.213334 27.306667 35.52 21.226667 82.346667 22.72 124.266667a2131.306667 2131.306667 0 0 1-50.986667-52.053333z" fill="#FDEB78" p-id="997"></path><path d="M528.106667 303.68c45.333333-40.533333 110.186667-13.973333 154.453333 14.4-56.426667 8.533333-117.12 42.666667-120.106667 106.24-31.68-31.68-46.506667-76.586667-34.346666-120.64zM264.853333 316.8c13.013333-11.413333 26.346667-24.426667 44.053334-27.733333 32.96 0.746667 66.346667-0.106667 98.666666 7.466666 10.453333 33.28 8.426667 69.226667-3.52 101.866667-26.133333-53.333333-79.68-85.333333-139.2-81.6z" fill="#FFFFB9" p-id="998"></path><path d="M158.4 405.653333c7.253333-51.413333 58.133333-83.52 106.453333-88.853333 59.52-3.733333 113.066667 28.266667 139.2 81.6-8 82.666667-95.36 117.866667-168.533333 100.053333-38.72-15.146667-79.253333-47.04-77.12-92.8m101.44-70.826666c-35.093333 7.253333-82.88 26.453333-78.72 70.186666-8.64 75.2 93.973333 96.426667 149.013333 74.026667-22.4-20.16-59.626667-36.906667-54.4-73.066667 2.666667-35.2 38.933333-48.533333 65.493334-62.933333-26.56-5.973333-54.08-14.826667-81.386667-8.213333m97.6 43.733333c-29.973333 6.933333 0.426667 51.733333 16.853333 27.626667 20.48-8.746667-2.666667-40-16.853333-27.626667zM562.453333 424.32c2.986667-63.573333 63.68-97.706667 120.106667-106.24 44.053333-1.28 91.84 5.12 125.653333 36.16 26.133333 20.906667 42.88 61.76 21.76 91.733333-61.866667 86.293333-224.32 80-267.52-21.653333m113.386667-88.64c-41.493333 8.213333-94.613333 31.466667-97.173333 79.573333 17.6 73.813333 117.226667 87.36 178.453333 64.213334-22.72-19.093333-55.146667-38.933333-45.013333-74.133334-0.32-33.813333 32.853333-46.186667 56.32-62.186666-30.186667-6.613333-61.653333-15.146667-92.586667-7.466667m119.253333 43.306667c-18.56 4.906667-19.52 36.906667 1.386667 38.506666 29.013333 20.48 30.933333-57.813333-1.386667-38.506666z" fill="#1F1F1F" p-id="999"></path><path d="M259.84 334.826667c27.306667-6.613333 54.826667 2.24 81.386667 8.213333-26.56 14.4-62.826667 27.733333-65.493334 62.933333-5.226667 36.16 32 52.906667 54.4 73.066667-55.04 22.4-157.653333 1.173333-149.013333-74.026667-4.16-43.733333 43.626667-62.933333 78.72-70.186666zM675.84 335.68c30.933333-7.68 62.4 0.853333 92.586667 7.466667-23.466667 16-56.64 28.373333-56.32 62.186666-10.133333 35.2 22.293333 55.04 45.013333 74.133334-61.226667 23.146667-160.853333 9.6-178.453333-64.213334 2.56-48.106667 55.68-71.36 97.173333-79.573333z" fill="#FFFFFF" p-id="1000"></path><path d="M357.44 378.56c14.186667-12.373333 37.333333 18.88 16.853333 27.626667-16.426667 24.106667-46.826667-20.693333-16.853333-27.626667zM795.093333 378.986667c32.32-19.306667 30.4 58.986667 1.386667 38.506666-20.906667-1.6-19.946667-33.6-1.386667-38.506666z" fill="#888A8E" p-id="1001"></path><path d="M345.386667 532.906667c47.786667-11.2 89.92-55.36 141.866666-36.266667 52.906667 20.373333 109.44 63.36 165.546667 24.96 77.12 41.493333 111.146667 141.333333 101.973333 225.6 1.493333 50.133333-48.32 88.853333-33.28 139.946667-47.466667 47.36-138.986667 58.88-209.493333 51.733333-71.04 8.853333-147.306667-4.053333-202.56-51.2-15.146667-57.6-46.293333-108.693333-68.693333-163.2 3.413333-34.24 40.853333-40.746667 66.453333-52.586667-8.213333-21.333333-24.32-40.426667-25.92-63.786666 5.546667-34.666667 33.386667-60.906667 64.106667-75.2m-9.92 38.08c-44.266667 7.466667-25.813333 66.24 0.106666 85.12 36.906667 22.613333 50.24 64.746667 67.733334 101.76-54.4 28.16-105.173333-10.986667-135.786667-53.546667-22.186667 21.653333 13.333333 50.666667 29.866667 65.386667 51.093333 42.346667 115.413333-4.266667 171.946666 15.786666 66.133333 12.693333 158.72-12.586667 181.653334-81.92-32.32 5.76-51.093333 37.226667-81.173334 48.533334-53.866667 24.853333-135.466667 23.04-164.373333-37.76-38.08-53.013333 68.266667-77.226667 45.12-130.133334-29.44-28.16-78.08-14.186667-115.093333-13.226666z" fill="#FFFFB9" p-id="1002"></path><path d="M105.386667 510.613333c38.826667-4.48 77.866667-2.453333 116.8-0.426666 41.92 2.026667 83.733333 7.786667 123.2 22.72-30.72 14.293333-58.56 40.533333-64.106667 75.2 1.6 23.36 17.706667 42.453333 25.92 63.786666-25.6 11.84-63.04 18.346667-66.453333 52.586667 22.4 54.506667 53.546667 105.6 68.693333 163.2-58.56-14.826667-98.453333-66.133333-134.293333-111.36-0.426667-0.533333-1.173333-1.706667-1.6-2.24-26.666667-42.773333-53.44-87.04-64.213334-136.96-0.213333-0.746667-0.533333-2.346667-0.64-3.093333-7.36-40.64-8.746667-82.453333-3.306666-123.413334zM652.8 521.6c50.24-26.133333 104.426667 1.066667 153.813333 14.933333 34.773333 12.053333 71.36 2.666667 106.986667 2.026667 3.413333 16.213333 5.226667 32.746667 7.253333 49.28 0.96 19.093333-2.026667 38.08-6.08 56.64-0.106667 0.746667-0.533333 2.24-0.746666 2.986667-11.093333 41.28-28.373333 80.853333-52.8 115.946666l-1.6 2.346667c-39.786667 45.546667-77.866667 102.72-138.133334 121.386667-15.04-51.093333 34.773333-89.813333 33.28-139.946667 9.173333-84.266667-24.853333-184.106667-101.973333-225.6z" fill="#FFFF9F" p-id="1003"></path><path d="M335.466667 570.986667c37.013333-0.96 85.653333-14.933333 115.093333 13.226666 23.146667 52.906667-83.2 77.12-45.12 130.133334 28.906667 60.8 110.506667 62.613333 164.373333 37.76 30.08-11.306667 48.853333-42.773333 81.173334-48.533334-22.933333 69.333333-115.52 94.613333-181.653334 81.92-56.533333-20.053333-120.853333 26.56-171.946666-15.786666-16.533333-14.72-52.053333-43.733333-29.866667-65.386667 30.613333 42.56 81.386667 81.706667 135.786667 53.546667-17.493333-37.013333-30.826667-79.146667-67.733334-101.76-25.92-18.88-44.373333-77.653333-0.106666-85.12m82.026666 28.693333c-4.586667 17.6 1.6 23.04 18.453334 16.213333 4.693333-17.92-1.493333-23.36-18.453334-16.213333z" fill="#7D180F" p-id="1004"></path><path d="M417.493333 599.68c16.96-7.146667 23.146667-1.706667 18.453334 16.213333-16.853333 6.826667-23.04 1.386667-18.453334-16.213333z" fill="#FFFFFF" p-id="1005"></path><path d="M108.693333 634.026667zM914.026667 647.466667c0.213333-0.746667 0.64-2.24 0.746666-2.986667-0.106667 0.746667-0.533333 2.24-0.746666 2.986667zM859.626667 765.76l1.6-2.346667-1.6 2.346667zM173.546667 774.08c0.426667 0.533333 1.173333 1.706667 1.6 2.24-0.426667-0.533333-1.173333-1.706667-1.6-2.24z" fill="#FFFFB9" p-id="1006"></path></svg>';

export default hopeTheme({
    hostname: "https://brinishness.eu.org",

    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },

    print: false,

    author: {
        name: "brinishness",
        url: "https://brinishness.eu.org",
    },

    iconAssets: ["iconfont", "//at.alicdn.com/t/c/font_4012987_m3as7bcc7w.css"],

    iconPrefix: "iconfont icon-",
    logo: "/goutou.svg",

    repo: "brinishness/brinishness.github.io",

    docsBranch: "master",

    docsDir: "src",

    blog: {
        medias: {
            // Baidu: "https://example.com",
            // BiliBili: "https://example.com",
            // Bitbucket: "https://example.com",
            // Dingding: "https://example.com",
            // Discord: "https://example.com",
            // Dribbble: "https://example.com",
            // Email: "mailto:info@example.com",
            // Evernote: "https://example.com",
            // Facebook: "https://example.com",
            // Flipboard: "https://example.com",
            // Gitee: "https://example.com",
            // GitHub: "https://example.com",
            // Gitlab: "https://example.com",
            // Gmail: "mailto:info@example.com",
            // Instagram: "https://example.com",
            // Lark: "https://example.com",
            // Lines: "https://example.com",
            // Linkedin: "https://example.com",
            // Pinterest: "https://example.com",
            // Pocket: "https://example.com",
            // QQ: "https://example.com",
            // Qzone: "https://example.com",
            // Reddit: "https://example.com",
            // Rss: "https://example.com",
            // Steam: "https://example.com",
            // Twitter: "https://example.com",
            // Wechat: "https://example.com",
            // Weibo: "https://example.com",
            // Whatsapp: "https://example.com",
            // Youtube: "https://example.com",
            // Zhihu: "https://example.com",
            Github: "https://github.com/brinishness",
            Brinishness: ["https://brinishness.eu.org", MR_HOPE_AVATAR],
        },
    },

    // sidebarSorter: ["filename", "order", "title"],

    locales: {
        // "/": {
        //     // navbar
        //     navbar: zhNavbar,
        //
        //     // sidebar
        //     sidebar: zhSidebar,
        //
        //     // footer: "Default footer",
        //     footer: "",
        //
        //     displayFooter: true,
        //
        //     blog: {
        //         description: "A FrontEnd programmer",
        //         intro: "/intro.html",
        //     },
        //
        //     metaLocales: {
        //         editLink: "Edit this page on GitHub",
        //     },
        // },

        /**
         * Chinese locale config
         */
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            // footer: "默认页脚",
            footer: "",

            displayFooter: true,

            blog: {
                description: "一个前端开发者",
                intro: "/zh/intro.html",
            },

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },

    encrypt: {
        config: {},
    },

    plugins: {
        blog: true,
        copyright: {
            author: "brinishness",
            license: "MIT",
            canonical: "https://brinishness.eu.org",
            global: true,
            triggerWords: 5,
            locales: {
                "/": {
                    // 覆盖链接文字
                    link: "原文发表于 :link",
                },
            },
        },
        pwa: true,
        feed: {
            atom: true,
            json: true,
            rss: true,
            image: "http://img.brinish.eu.org:5205/images/2023/04/11/3d0c8af0d20329a680e4012f31a4b4d1.jpg",
            icon: "/goutou.svg",
            count: 1000,
            channel: {},
        },
        comment: {
            // @typescript-expect-error: You should generate and use your own comment service
            // provider: "Giscus",
            // repo: "brinishness/brinishness.github.io",
            // repoId: "R_kgDOH97_hA",
            // category: "Q&A",
            // categoryId: "DIC_kwDOH97_hM4CVreP",
            // mapping: "url",
            // strict: true,
            // lazyLoading: false
            provider: "Waline",
            // serverURL: "https://waline-gilt-three.vercel.app",
            serverURL: "https://waline.brinishness.eu.org",
            site: "https://brinishness.eu.org",
            dart: "body.theme-dark",
            meta: ['nick', 'mail'],
            // copyright: false,
            // "el" | "comment" | "locale" | "search" | "imageUploader" | "texRenderer"
            comment: true,
            search: true,
            locale: {
                level0: '炼气',
                level1: '筑基',
                level2: '金丹',
                level3: '元婴',
                level4: '化神',
                level5: '婴变',
                level6: '问鼎',
                level7: '阴虚',
                level8: '阳实',
                level9: '踏天',
            }
        },

        autoCatalog: {
            index: true,
            locales: {
                "/": {
                    title: "目录"
                }
            },
            exclude: ['/CHANGELOG.html', '/changelog.html']
        },

        // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: {
                jsfiddle: false,
            },
            card: true,
            tasklist: true,
            echarts: true,
            figure: false,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
            // 你想使用的组件
        },
        components: {
            // 你想使用的组件
            components: [
                "ArtPlayer",
                "AudioPlayer",
                "Badge",
                "BiliBili",
                "CodePen",
                "PDF",
                "Replit",
                "StackBlitz",
                "VideoPlayer",
                "YouTube",
            ],
        },
        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
