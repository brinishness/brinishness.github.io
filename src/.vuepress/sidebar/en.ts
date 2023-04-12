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
      icon: "discover",
      text: "frontend",
      prefix: "frontend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "backend",
      prefix: "backend/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "discover",
      text: "os",
      prefix: "os/",
      collapsible: true,
      children: "structure",
    },
  ],
});
