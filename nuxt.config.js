
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './sass/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/global.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-clipboard2',
    ['vue-scrollto/nuxt', { offset: -80 }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare', 'faTwitter', 'faInstagram', 'faWhatsapp', 'faYoutube', 'faTelegram']
        },
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faFontCase', 'faPalette', 'faShareAlt', 'faPrint', 'faCamera', 'faFilm', 'faMegaphone', 'faArrowCircleDown', 'faFile', 'faTimesCircle']
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  /*
  ** BootstrapVue config
  */
  bootstrapVue: {
    componentPlugins: [
      'NavbarPlugin',
      'CollapsePlugin',
      'VBScrollspyPlugin',
      'ButtonPlugin'
    ],
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}
