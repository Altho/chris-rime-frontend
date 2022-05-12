const withPWA = require('next-pwa');



module.exports =  {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"],
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  env: {
    DB_HOST: process.env.DB_HOST,
  },
}
