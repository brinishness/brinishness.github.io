import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {text: "演示", icon: "discover", link: "/zh/demo/"},
    {
        text: "博文",
        icon: "edit",
        prefix: "/zh/posts/",
        children: [
            {
                text: "苹果",
                icon: "edit",
                prefix: "apple/",
                children: [
                    {text: "苹果1", icon: "edit", link: "1"},
                    {text: "苹果2", icon: "edit", link: "2"},
                    "3",
                    "4",
                ],
            },
            {
                text: "香蕉",
                icon: "edit",
                prefix: "banana/",
                children: [
                    {
                        text: "香蕉 1",
                        icon: "edit",
                        link: "1",
                    },
                    {
                        text: "香蕉 2",
                        icon: "edit",
                        link: "2",
                    },
                    "3",
                    "4",
                ],
            },
            {text: "樱桃", icon: "edit", link: "cherry"},
            {text: "火龙果", icon: "edit", link: "dragonfruit"},
            "tomato",
            "strawberry",
        ],
    },
    {
        icon: "discover",
        text: "前端",
        prefix: "/zh/frontend/",
        children: [
            {
                text: "html",
                icon: "edit",
                link: "html"
            },
            {
                text: "css",
                icon: "edit",
                link: "css",
            },
            {
                text: "javascript",
                icon: "edit",
                link: "javascript",
            }
        ],
        // children: "structure",
    },
    {
        icon: "discover",
        text: "后端",
        prefix: "/zh/backend/",
        children: [
            {
                text: "go",
                icon: "edit",
                link: "go"
            },
            {
                text: "python",
                icon: "edit",
                link: "python",
            },
            {
                text: "java",
                icon: "edit",
                link: "java",
            }
        ],
    },
    {
        icon: "discover",
        text: "系统",
        prefix: "/zh/os/",
        children: [
            {
                text: "镜像",
                icon: "edit",
                link: "images"
            }
        ],
    },
    // {
    //   text: "V2 文档",
    //   icon: "note",
    //   link: "https://theme-hope.vuejs.press/zh/",
    // },
]);
