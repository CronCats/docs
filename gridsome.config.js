// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Docs.Cron.Cat',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.cron.cat',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: 'https://cron.cat', title: 'Home' },
        { path: '/docs/', title: 'Docs' }
      ],
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Introduction',
            items: [
              '/docs/',
              '/docs/use-cases/',
            ],
          },
          {
            title: 'Agent',
            items: [
              '/docs/agent-cli/',
              '/docs/agent-docker/',
            ],
          },
          {
            title: 'Integration',
            items: [
              '/docs/contract-integration/',
              '/docs/task-creation/',
              '/docs/task-monitoring/',
            ],
          },
          {
            title: 'Examples',
            items: [
              '/docs/examples/',
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
    //   },
    // },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
}
