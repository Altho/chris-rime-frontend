


module.exports =  {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  env: {
    DB_HOST: process.env.DB_HOST,
  },
}
