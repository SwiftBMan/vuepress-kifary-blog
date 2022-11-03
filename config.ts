import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Blog of Kifary',
    description: '我的学习博客站点',
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@root/, path.resolve(__dirname, '.')),
        },
    },
    base: '/Blog-of-Kifary/'
});
