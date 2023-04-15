import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {
        icon: "front-end",
        text: "前端",
        prefix: "/zh/frontend/",
        children: [
            {
                text: "html",
                icon: "html5",
                link: "html"
            },
            {
                text: "css",
                icon: "css3",
                link: "css",
            },
            {
                text: "javascript",
                icon: "javascript",
                link: "javascript",
            }
        ],
        // children: "structure",
    },
    {
        icon: "back-end",
        text: "后端",
        prefix: "/zh/backend/",
        children: [
            {
                text: "go",
                icon: "golang",
                link: "go"
            },
            {
                text: "python",
                icon: "python",
                link: "python",
            },
            {
                text: "java",
                icon: "java",
                link: "java",
            }
        ],
    },
    {
        icon: "jingxiang",
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