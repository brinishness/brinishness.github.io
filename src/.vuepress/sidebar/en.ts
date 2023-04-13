import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
    {
      icon: "front-end",
      text: "frontend",
      prefix: "frontend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "back-end",
      text: "backend",
      prefix: "backend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "jingxiang",
      text: "os",
      prefix: "os/",
      collapsible: true,
      children: "structure",
    },
  ],
});
