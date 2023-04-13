import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
    {text: "Demo", icon: "discover", link: "/demo/"},
    {
        text: "Posts",
        icon: "edit",
        prefix: "/posts/",
        children: [
            {
                text: "Apple",
                icon: "edit",
                prefix: "apple/",
                children: [
                    {text: "Apple1", icon: "edit", link: "1"},
                    {text: "Apple2", icon: "edit", link: "2"},
                    "3",
                    "4",
                ],
            },
            {
                text: "Banana",
                icon: "edit",
                prefix: "banana/",
                children: [
                    {
                        text: "Banana 1",
                        icon: "edit",
                        link: "1",
                    },
                    {
                        text: "Banana 2",
                        icon: "edit",
                        link: "2",
                    },
                    "3",
                    "4",
                ],
            },
            {text: "Cherry", icon: "edit", link: "cherry"},
            {text: "Dragon Fruit", icon: "edit", link: "dragonfruit"},
            "tomato",
            "strawberry",
        ],
    },
    {
        icon: "back-end",
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
