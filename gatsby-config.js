require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    siteTitle: 'Brei Nach Neun e.V.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATOCMS_READONLY_KEY

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        // previewMode: true,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        // disableLiveReload: true,

        // Custom API base URL
        // apiUrl: 'https://admin.brei-nach-neun.de'
      }
    },
    `gatsby-transformer-remark`
  ]
}
