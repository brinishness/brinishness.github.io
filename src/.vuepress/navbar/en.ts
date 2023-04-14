import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
    {
        icon: "front-end",
        text: "frontend",
        prefix: "/frontend/",
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
        text: "backend",
        prefix: "/backend/",
        children: [
            {
                text: "go",
                icon: "go",
                link: "go"
            },
            {
                text: "node",
                icon: "node",
                link: "node"
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
        text: "os",
        prefix: "/os/",
        children: [
            {
                text: "images",
                icon: "jingxiang",
                link: "images"
            }
        ],
    },
    // {
    //   text: "V2 Docs",
    //   icon: "note",
    //   link: "https://theme-hope.vuejs.press/",
    // },
]);
