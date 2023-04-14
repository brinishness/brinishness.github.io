import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/zh/": [
        {
            icon: "front-end",
            text: "前端",
            prefix: "frontend/",
            collapsible: true,
            children: "structure",
        },
        {
            icon: "back-end",
            text: "后端",
            prefix: "backend/",
            collapsible: true,
            children: "structure",
        },
        {
            icon: "jingxiang",
            text: "系统",
            prefix: "os/",
            collapsible: true,
            children: "structure",
        },
        {
            icon: "brower",
            text: "浏览器",
            prefix: "brower/",
            collapsible: true,
            children: "structure",
        },
        {
            icon: "server",
            text: "服务器",
            prefix: "server/",
            collapsible: true,
            children: "structure",
        },
    ],
});
