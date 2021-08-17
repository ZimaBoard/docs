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
    // '/Projects/': [
    //     {
    //         text: 'Projects with ZimaBoard',
    //         children: [
    //             {
    //                 text: 'Overview',
    //                 link: '/Projects/README.md',
    //             },
    //             '/Projects/PersonalCloudApps.md',
    //             '/Projects/TinkeringNetworking.md',
    //             '/Projects/Hardware&Intelligence.md',
    //         ],
    //     },
    // ],
}