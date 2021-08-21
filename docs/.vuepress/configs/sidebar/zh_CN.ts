import type { SidebarConfig } from '@vuepress/theme-default'

export const zh_CN: SidebarConfig = {
    '/zh/get-started/': [
        {
            text: '快速上手',
            children: [
                '/zh/get-started/README.md',
                '/zh/get-started/01.md',
                '/zh/get-started/02.md',
                '/zh/get-started/03.md',
                '/zh/get-started/04.md',
                '/zh/get-started/05.md',
                '/zh/get-started/complete.md',
                '/zh/get-started/next.md',
            ],
        },
    ],
    '/zh/projects/CreateYourFirstPersonalCloudStorage/': [
        {
            text: 'Create Your First Personal Cloud Storage',
            children: [
                '/zh/projects/CreateYourFirstPersonalCloudStorage/README.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/01.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/02.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/03.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/04.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/complete.md',
                '/zh/projects/CreateYourFirstPersonalCloudStorage/next.md',
            ],
        },
    ],
}