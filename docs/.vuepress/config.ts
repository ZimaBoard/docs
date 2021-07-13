import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/',

    lang: 'en-US',
    title: 'ZimaBoard Docs',
    description: 'ZimaBoard Official Documentation',

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
                navbar: navbar.en,

                // sidebar
                sidebar: sidebar.en,

                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
        },
    },
})