import { defineUserConfig } from 'vuepress';
import hopeTheme from './hope-theme';

export default defineUserConfig({
    base: "/vuepress-kifary-blog/",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "Blog of Kifary",
            description: "A blog of Kifary",
        }
    },
    
    theme: hopeTheme,

    shouldPrefetch: false,
});
