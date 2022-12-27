export default {
  head: {
    titleTemplate: '%s - fr-portfolio',
    title: 'fr-portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }],
  },

  target: 'static',

  css: ["~/assets/style/main.scss"],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        light: {
          "fr-white": "#eff0f3",
          "fr-yellow": "#f9bc60",
          "fr-red": "#e16162",
          "fr-green": "#004643",
          "fr-ightgreen": "#abd1c6"
        },
        dark: {
          "fr-white": "#004643",
          "fr-yellow": "#f9bc60",
          "fr-red": "#e16162",
          "fr-green": "#eff0f3",
          "fr-ightgreen": "#abd1c6"
        },
      },
    },
  },

  build: {},
}
