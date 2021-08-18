import type { SidebarConfig } from '@vuepress/theme-default'

export const en_US: SidebarConfig = {
    '/GetStarted/': [
        {
            text: 'Get Started with ZimaBoard',
            children: [
                '/GetStarted/README.md',
                '/GetStarted/01.md',
                '/GetStarted/02.md',
                '/GetStarted/Complete.md',
                '/GetStarted/Next.md',
            ],
        },
    ],
    '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/': [
        {
            text: 'Create Your First Personal Cloud Storage',
            children: [
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/README.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/01.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/02.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/03.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/04.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/Complete.md',
                '/Projects/PersonalCloudApps/CreateYourFirstPersonalCloudStorage/Next.md',
            ],
        },
    ],
}