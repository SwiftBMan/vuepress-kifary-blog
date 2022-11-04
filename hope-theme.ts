import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
    // 网站部署域名
    hostname: "https://swiftbman.github.io",

    // 全局默认作者
    author: [
        {
            name: "Kifary",
            url: "https://swiftbman.github.io",
        }
    ],

    // 字体图标资源链接
    iconAssets: "iconfont",

    // 导航栏图标
    logo: "/logo.svg",

    // 仓库链接
    repo: "SwiftBMan/vuepress-kifary-blog",

    // 文档在仓库中的位置
    docsDir: "docs",

    // 文章信息配置 "Author" | "Category" | "Date" | "Original" | "PageView" | "Tag" | "ReadingTime" | "Word"
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        medias: {// 媒体链接配置
            GitHub: "https://github.com/SwiftBMan",
            Baidu: "https://www.baidu.com",
            BiliBili: "https://www.bilibili.com",
            //Bitbucket: "https://example.com",
            //Dingding: "https://example.com",
            //Discord: "https://example.com",
            //Dribbble: "https://example.com",
            Email: "mailto:zheng.qi.hui@qq.com",
            //Evernote: "https://example.com",
            //Facebook: "https://example.com",
            //Flipboard: "https://example.com",
            //Gitee: "https://example.com",
            
            //Gitlab: "https://example.com",
            //Gmail: "https://example.com",
            //Instagram: "https://example.com",
            //Lark: "https://example.com",
            //Lines: "https://example.com",
            //Linkedin: "https://example.com",
            //Pinterest: "https://example.com",
            //Pocket: "https://example.com",
            //QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
            Qzone: "https://1071066507.qzone.qq.com/",
            //Reddit: "https://example.com",
            //Rss: "https://example.com",
            //Steam: "https://example.com",
            //Twitter: "https://example.com",
            //Wechat: "https://example.com",
            //Weibo: "https://example.com",
            //Whatsapp: "https://example.com",
            //Youtube: "https://example.com",
            //Zhihu: "https://example.com",
            // vuepress_theme_hope: [
            //     "https://vuepress-theme-hope.github.io/v2/zh/",
            //     './docs/.vuepress/public/logo.svg',
            // ],

            vuepress_theme_hope: [
                "https://vuepress-theme-hope.github.io/v2/zh/",
                path.resolve(__dirname, "docs/.vuepress/public/logo.svg"),
            ],
        },
        sidebarDisplay: "mobile",
        articlePerPage: 1,
        avatar: "https://avatars.githubusercontent.com/u/15168530?v=4https://avatars.githubusercontent.com/u/15168530?v=4",
        roundAvatar: true,
        name: "Kifary",
        description: "技术改变命运",
        intro: "/intro.html",
        timeline: "岁月匆匆",
    },

    plugins: {
        blog: {
            autoExcerpt: false,
        },
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageLazyload: true, // 启用图片懒加载
            imageTitle: true, // 启用图片标题
            imageSize: true, // 启用图片大小
            imageMark: true, // 启用图片标记
            include: true,
            katex: true,
            mathjax: false,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
        
    },

    darkmode: "switch", //https://vuepress-theme-hope.github.io/v2/zh/guide/interface/darkmode.html

    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    }
});