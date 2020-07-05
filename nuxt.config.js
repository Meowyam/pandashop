
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Pandashop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'PgyvKaiR1h1Pjub4OlZewDnm0zhQ69fBlgEn0wo1rro' },
      { name: 'copyright', content: 'Maryam Hanafiah of chilon.net ltd' },
      { hid: 'description', name: 'description', content: 'Hi! I\'m a creative technologist, javascript and python developer based in London and Singapore. This is my personal portfolio and resume.' },
      { name: 'keywords', content: 'web developer, creative technologist, vuejs, nuxtjs, angularjs, python, php, wordpress, raspberry pi, ui, illustration, illustrator, layout designer, html, tech, tech blog, javascript, es6, docker, kubernetes, ballerinaio' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'tachyons/css/tachyons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/anime.js',
    '~/plugins/fontawesome.js',
    '~/plugins/tooltip.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-28226014-1'
    }]

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
