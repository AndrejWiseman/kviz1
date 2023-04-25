/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {

    siteMetadata:{
      title: 'KvizoManiA',
      description: 'Za ljubitelje kvizova i mini igara',
      author: 'ByMe',
      siteUrl: `https://kvizomania.vercel.app/`,
    },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,


    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },


    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VK40S4Y963", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },



  {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                  context {
                    lastmoddate
                  }
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              lastmod: (edge.node.context.lastmoddate) ? edge.node.context.lastmoddate.substring(0,10) : null
            }
          })
      }
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kvizomania.vercel.app/',
        sitemap: 'https://kvizomania.vercel.app/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}],
        // resolveEnv: () => process.env.GATSBY_ENV,
        // env: {
        //   development: {
        //     policy: [{ userAgent: '*', disallow: ['/'] }]
        //   },
        //   production: {
        //     policy: [{ userAgent: '*', allow: '/' }]
        //   }
        // }
      }
    },




  ],
}
