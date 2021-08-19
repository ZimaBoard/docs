import type { NavbarConfig } from '@vuepress/theme-default'

export const en_US: NavbarConfig = [
    {
        text: 'Get Started',
        link: '/get-started/',
    },
    {
        text: 'Projects',
        children: [
            {
                text: 'Overview',
                link: '/projects/README.md',
            },
            '/projects/personal-cloud/',
            '/projects/tinkering-networking/',
            '/projects/hardware-n-intelligence/',
        ],
    },
    {
        text: 'Knowledge Base',
        link: '/kb/',
    },
    {
        text: 'Community',
        link: '/community/',
    },
    {
        text: 'Shop',
        link: 'https://shop.zimaboard.com',
    },
    {
        text: 'Back To HomePage',
        link: 'https://www.zimaboard.com',
    },
]