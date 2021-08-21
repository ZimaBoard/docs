import type { NavbarConfig } from '@vuepress/theme-default'

export const zh_CN: NavbarConfig = [
    {
        text: '入门',
        link: '/zh/get-started/',
    },
    {
        text: '探索',
        children: [
            {
                text: '概览',
                link: '/zh/explore/index.html',
            },
            '/zh/explore/personal-cloud/',
            '/zh/explore/tinkering-networking/',
            '/zh/explore/hardware-n-intelligence/',
        ],
    },
    {
        text: '知识库',
        link: '/zh/kb/',
    },
    {
        text: '社区',
        link: '/zh/community/',
    },
    {
        text: '商店',
        link: 'https://shop.zimaboard.com',
    },
    {
        text: '返回官网',
        link: 'https://www.zimaboard.com',
    },
]