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
        icon: "discover",
        text: "frontend",
        prefix: "/frontend/",
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
        text: "backend",
        prefix: "/backend/",
        children: [
            {
                text: "go",
                icon: "edit",
                link: "go"
            },
            {
                text: "node",
                icon: "edit",
                link: "node"
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
        text: "os",
        prefix: "/os/",
        children: [
            {
                text: "images",
                icon: "edit",
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
