
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Manual d\'estil - Compromís',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#353949' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', type: 'image/x-icon', href: '/safari-pinned-tab.svg', color: '#ff6720' }
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
          icons: [
            'faFontCase', 'faPalette', 'faShareAlt', 'faPrint', 'faCamera',
            'faFilm', 'faMegaphone', 'faArrowCircleDown', 'faFile', 'faTimesCircle',
            'faSendBackward', 'faUserCircle', 'faBook', 'faPhotoVideo', 'faPlay', 'faPortrait',
            'faEye', 'faEyeSlash'
          ]
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
