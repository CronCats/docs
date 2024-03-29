// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'
import './overrides.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  appOptions.store = Vue.observable({ isDarkMode: false })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      // content: process.env.GRIDSOME_BASE_PATH + to.path,
      content: process.env.SITE_URL ? process.env.SITE_URL + to.path : 'https://docs.cron.cat' + to.path,
    })
    next()
  })
}
