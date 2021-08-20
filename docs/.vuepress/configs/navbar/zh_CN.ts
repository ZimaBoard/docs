import type { NavbarConfig } from '@vuepress/theme-default'

export const zh_CN: NavbarConfig = [
    {
        text: '快速上手',
        link: '/zh/get-started/',
    },
    {
        text: '项目',
        children: [
            {
                text: '概览',
                link: '/zh/projects/index.html',
            },
            '/zh/projects/personal-cloud/',
            '/zh/projects/tinkering-networking/',
            '/zh/projects/hardware-n-intelligence/',
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
        text: '返回主页',
        link: 'https://www.zimaboard.com',
    },
]