require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `wendler.dev`,
    siteUrl: `https://wendler.dev`,
    siteDescription: `Just a developer's thoughts about how life works`,
    siteLanguage: `en`,
    author: `@wendlereis`,
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/Wendlereis`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/wendlereis/`
      },
    ],
    siteTitleAlt: `wendler-dev`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wendler.dev - a developer's thoughts about how life works`,
        short_name: `wendler.dev`,
        description: `Just a developer's thoughts about how life works`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
