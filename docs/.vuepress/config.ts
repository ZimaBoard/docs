import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/',

    lang: 'en-US',
    title: 'ZimaBoard Docs',
    description: 'ZimaBoard Official Documentation',

    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'ZimaBoard Docs',
            description: 'Your All In One Home Server Manual',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'ZimaBoard 文档',
            description: '你的一站式家庭服务器手册',
        },
    },
    themeConfig: {
        logo: '/images/hero.png',
        repo: 'zimaboard/docs',

        docsDir: 'docs',

        // theme-level locales config
        locales: {
            /**
             * English locale config
             *
             * As the default locale of @vuepress/theme-default is English,
             * we don't need to set all of the locale fields
             */
            '/': {
                // navbar
                navbar: navbar.en_US,
                selectLanguageText: '🇺🇸',

                // sidebar
                sidebar: sidebar.en_US,

                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
            '/zh/': {
                // navbar
                navbar: navbar.zh_CN,
                selectLanguageName: '简体中文',
                selectLanguageText: '🇨🇳',
                selectLanguageAriaLabel: '选择语言',

                // sidebar
                sidebar: sidebar.zh_CN,

                // page meta
                editLinkText: '在 GitHub 上编辑此页面',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
            },
        },
    },
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],
})