import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      collapsable: true,
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
      collapsable: true,
    },
    "intro",
    "slides",
  ],
});
