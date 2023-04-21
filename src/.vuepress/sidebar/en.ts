import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
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
    {
      icon: "brower",
      text: "brower",
      prefix: "brower/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "server",
      text: "server",
      prefix: "server/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "synology",
      text: "nas",
      prefix: "nas/",
      collapsible: true,
      children: "structure",
    },
  ],
});
