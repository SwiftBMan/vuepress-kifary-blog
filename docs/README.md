---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

[[toc]]

# Hello VuePress

## 使用链接

[link](.)  

## 使用 emoji
### emoji
- 使用 emoji 😈 :tada:

## 代码块
### 行高亮
```ts{1,6-8} :no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
### 行号
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### 添加 v-pre
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### 导入代码块
```md
<!-- 最简单的语法 -->
@[code](../foo.js)
<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](../foo.js)
<!-- 指定代码语言 -->
@[code js](../foo.js)
<!-- 行高亮 -->
@[code js{2,4-5}](../foo.js)
```
@[code{1-7} ts{3}:no-line-numbers](../config.ts)
@[code](@root/config.ts)

## 模板语法
` 一加一等于： {{ 1 + 1 }} ` 一加一等于： {{ 1 + 1 }} 
` <span v-for="i in 3"> span: {{ i }} </span> ` <br />
<span v-for="i in 3"> span: {{ i }} </span><br/>
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

## 静态资源
![VuePress Logo](/images/hero.png)
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">