import type { SidebarConfig } from '@vuepress/theme-default'

export const en_US: SidebarConfig = {
    '/GetStarted/': [
        {
            text: 'Get Started with ZimaBoard',
            children: [
                '/GetStarted/README.md',
                '/GetStarted/01.md',
                '/GetStarted/02.md',
                '/GetStarted/complete.md',
                '/GetStarted/next.md',
            ],
        },
    ],
}