import { copyright, hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "@vuepress/utils";
import { zhNavbar } from "./docs/.vuepress/navbar/index";
import { zhSidebar } from "./docs/.vuepress/sidebar/index";

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

    // 暗黑模式下的导航栏图标
    logoDark: "/logo.svg",

    // 仓库链接
    repo: "SwiftBMan/vuepress-kifary-blog",
    repoLabel: "GitHub",
    repoDisplay: true,

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
        // 图片预览
        photoSwipe: {
            delay: 500
        },
        copyCode: {
            showInMobile: true,
            //duration: 0,
            pure: false,
        },
        copyright: {
            global: true,
            triggerWords: 1,
            author: "Kifary",
            license: "MIT"
        },
        blog: {
            autoExcerpt: false,
        },
        mdEnhance: {
            footnote: true,
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
        
        components: [
            "BiliBili",
            "Badge",
            "CodePen",
            "PDF",
            "StackBlitz"
        ],

        comment: {
            /**
             * Using Giscus
             */
            // https://giscus.app/zh-CN
            provider: "Giscus",
            repo: "SwiftBMan/vuepress-kifary-blog",
            repoId: "R_kgDOIXK7Lg",
            category: "Announcements",
            categoryId: "DIC_kwDOIXK7Ls4CSYhe",
            mapping: "pathname",
            strict: true,
            reactionsEnabled: true,
            
            inputPosition: "top",
            lightTheme: "light",
            darkTheme: "dark",
            lazyLoading: true,

            author: "Kifary",
            comment: true,
            

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },

        
    },

    darkmode: "switch", //https://vuepress-theme-hope.github.io/v2/zh/guide/interface/darkmode.html

    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },

    fullscreen: true,

    backToTop: 300,

    pure: false,

    // 导航栏链接
    navbar: zhNavbar,

    navbarAutoHide: "mobile",

    navbarIcon: true,

    // 导航栏组件布局
    navbarLayout: {
        left: ["Brand"],
        center: ["Links"],
        right: ["Language", "Repo", "Outlook", "Search"],
    },

    // 侧边栏
    //sidebar: zhSidebar,
    sidebar: "structure",

    sidebarIcon: true,

    sidebarSorter: ["readme", "order", "title"],

    // 路径导航
    breadcrumb: true,
    breadcrumbIcon: true,

    displayFooter: true,
    footer: "undefined",
    copyright: "MIT Licensed | Copyright © 2022-present Kifary",

    encrypt: {
        global: false,
        admin: "1234",
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    
    
});