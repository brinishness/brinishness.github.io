import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
    {
      icon: "discover",
      text: "前端",
      prefix: "frontend/",
      // link: "frontend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "后端",
      prefix: "backend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "系统",
      prefix: "os/",
      collapsible: true,
      children: "structure",
    },
  ],
});
