require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    name: config.name,
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    author: config.name
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
       resolve: `gatsby-plugin-typography`,
       options: {
         pathToConfigModule: `src/utils/typography`,
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adelola`,
        short_name: `adelola`,
        start_url: `/`,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
