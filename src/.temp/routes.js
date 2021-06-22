export default [
  {
    path: "/docs/writing-content/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/settings/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/sidebar/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/examples/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/deploying/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/templates/MarkdownPage.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nanook/code/src/github.com/Cron-Near/docs/src/pages/404.vue")
  }
]

