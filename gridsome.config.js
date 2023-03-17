// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CronCat',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.cron.cat',
  settings: {
    web: process.env.URL_WEB || 'https://cron.cat',
    twitter: process.env.URL_TWITTER || 'https://twitter.com/croncats',
    github: process.env.URL_GITHUB || 'https://github.com/Cron-Near/docs',
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
              '/docs/values-vision/',
              '/docs/deployed-contracts/',
            ],
          },
          {
            title: 'Tasks',
            items: [
              '/docs/task-creation/',
              '/docs/task-monitoring/',
              '/docs/contract-integration/',
            ],
          },
          {
            title: 'Examples',
            items: [
              '/docs/examples/',
              '/docs/example-counter/',
              '/docs/example-charity/',
              '/docs/example-airdrop/',
              '/docs/example-indexer/',
            ],
          },
          {
            title: 'Tutorials',
            items: [
              '/docs/tutorials/',
            ],
          },
          {
            title: 'Agent',
            items: [
              '/docs/agents-cosmos/',
              '/docs/pre-reqs-agent/',
              '/docs/agent-changelog/',
              '/docs/agent-cli/',
              '/docs/agent-faq/',
              '/docs/agent-docker/',
              '/docs/env-file/',
              '/docs/validator-croncat/',
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
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
