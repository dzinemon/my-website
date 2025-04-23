module.exports = {
  siteMetadata: {
    title: `Andrii's website`,
    description: `Human, learner, maintainer`,
    author: `@gatsbyjs`,
    siteUrl: `https://andrii-on.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrii's website`,
        short_name: `Andrii's website build with Gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/andrew-fav.png`, // This path is relative to the root of the site.
      },
    },
    // Added gatsby-plugin-sitemap for dynamic sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => `https://andrii-on.netlify.app`,
        resolvePages: ({ allSitePage: { nodes } }) => nodes,
        serialize: ({ path }) => ({ url: path }),
      },
    },
    "gatsby-plugin-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
