import type { NavbarConfig } from '@vuepress/theme-default'

export const en_US: NavbarConfig = [
    {
        text: 'Get Started',
        link: '/GetStarted/',
    },
    {
        text: 'Projects',
        children: [
            {
                text: 'Overview',
                link: '/Projects/README.md',
            },
            '/Projects/PersonalCloudApps.md',
            '/Projects/TinkeringNetworking.md',
            '/Projects/Hardware&Intelligence.md',
        ],
    },
    {
        text: 'Knowledge Base',
        link: '/KnowledgeBase/',
    },
    {
        text: 'Community',
        link: '/Community/',
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