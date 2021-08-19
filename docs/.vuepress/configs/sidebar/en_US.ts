import type { SidebarConfig } from '@vuepress/theme-default'

export const en_US: SidebarConfig = {
    '/get-started/': [
        {
            text: 'Get Started with ZimaBoard',
            children: [
                '/get-started/README.md',
                '/get-started/01.md',
                '/get-started/02.md',
                '/get-started/complete.md',
                '/get-started/next.md',
            ],
        },
    ],
    '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/': [
        {
            text: 'Create Your First Personal Cloud Storage',
            children: [
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/README.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/01.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/02.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/03.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/04.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/complete.md',
                '/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/next.md',
            ],
        },
    ],
}