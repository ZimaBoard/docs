import type { SidebarConfig } from '@vuepress/theme-default'

export const en_US: SidebarConfig = {
    '/get-started/': [
        {
            text: 'Get Started with ZimaBoard',
            children: [
                '/get-started/README.md',
                '/get-started/access-local-storage.md',
                '/get-started/hands-on-emby.md',
                '/get-started/hands-on-lychee.md',
                '/get-started/oculus-meet-zimaboard.md',
                '/get-started/learn-more.md',
            ],
        },
    ],
    '/casaos/': [
        '/casaos/',
        {
            text: 'Tutorial',
            children: [
                '/casaos/install-app.md',
            ],
        },
    ],
    '/projects/CreateYourFirstPersonalCloudStorage/': [
        {
            text: 'Create Your First Personal Cloud Storage',
            children: [
                '/projects/CreateYourFirstPersonalCloudStorage/README.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/01.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/02.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/03.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/04.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/complete.md',
                // '/projects/CreateYourFirstPersonalCloudStorage/next.md',
            ],
        },
    ],
}