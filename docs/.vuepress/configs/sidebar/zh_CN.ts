import type { SidebarConfig } from '@vuepress/theme-default'

export const zh_CN: SidebarConfig = {
    '/zh/get-started/': [
        {
            text: 'ZimaBoard 快速上手',
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
    '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/': [
        {
            text: 'Create Your First Personal Cloud Storage',
            children: [
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/README.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/01.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/02.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/03.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/04.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/complete.md',
                '/zh/projects/personal-cloud/CreateYourFirstPersonalCloudStorage/next.md',
            ],
        },
    ],
}