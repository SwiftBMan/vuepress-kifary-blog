import { defineUserConfig } from 'vuepress';
import hopeTheme from './hope-theme';
import { searchPlugin } from "@vuepress/plugin-search";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";

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

    plugins: [
        // photoSwipePlugin({
        //     delay: 5000,
        //     options: {

        //     }
        // }),
        searchPlugin({
            maxSuggestions: undefined,
            // getExtraFields: (dd) => {
            //     console.log(dd.content);
            //     return [dd.contentRendered];
            // },
            isSearchable: () => {
                // 过滤
                return true;
            },
            hotKeys: [{key: "s", ctrl: true}],
            locales: {
                "/": {
                    placeholder: "搜索 Ctrl+S",
                }
            }
        }),
    ],
});
