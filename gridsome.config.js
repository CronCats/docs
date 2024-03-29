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
            ],
          },
          {
            title: 'Smart contracts',
            items: [
              '/docs/deployed-contracts/',
              '/docs/contracts-factory/',
              '/docs/contracts-manager/',
              '/docs/contracts-tasks/',
              '/docs/contracts-agents/',
            ]
          },
          {
            title: 'Tasks',
            items: [
              '/docs/task-anatomy/',
              '/docs/task-creation/',
              '/docs/task-monitoring/',
            ],
          },
          {
            title: 'Integrate in your dApp',
            items: [
              '/docs/integration/',
            ],
          },
          {
            title: 'Examples',
            items: [
              '/docs/examples/',
              '/docs/example-validate-invocation/',
            ],
          },
          // { Would like to keep this and uncomment later
          //   title: 'Tutorials',
          //   items: [
          //     '/docs/tutorials/',
          //   ],
          // },
          {
            title: 'Agent',
            items: [
              '/docs/agents-cosmos/',
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
