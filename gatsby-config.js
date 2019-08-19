module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: '@dschau/gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || 'gatsby-example-blog-cosmicjs',
        objectTypes: ['posts','settings'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY || 'yZ1YstGqOK8WoeEL8jc2KRSMtu76nlufecEhjb4FlNbG3SZVTj',
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
