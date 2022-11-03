import { defineUserConfig } from 'vuepress';
import hopeTheme from './docs/.vuepress/theme';

export default defineUserConfig({
    base: "/vuepress-kifary-blog/",

    locales: {
        "/": {
            lang: "en-US",
            title: "Blog Demo",
            description: "A blog demo for vuepress-theme-hope",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "博客演示",
            description: "vuepress-theme-hope 的博客演示",
        },
    },
    
    theme: hopeTheme,

    shouldPrefetch: false,
});
