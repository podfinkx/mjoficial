/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Marco Jimenez",
    description: "Caracas, Venezuela",
    siteUrl: "https://www.marcojimenezoficial.com"
  },

  plugins: [

    // Google Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: ``,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },

    // Add favicon and other PWA manifest config
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Marco Jimenez",
        short_name: "MJ",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    // Add gatsby-theme-musician to your site
    {
      resolve: "gatsby-theme-musician",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        // pwaName: null
      }
    },

    // Add gatsby-plugin-mailchimp
    /*{
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // Find the POST URL for signing up to your list with an embedded form
        endpoint: '',
      },
    },*/

    // Let's process our own images with Gatsby instead of relying upon the starter theme
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
};
