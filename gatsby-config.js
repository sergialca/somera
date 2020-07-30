/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: "/somera",
    plugins: [
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -50,
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
    siteMetadata: {
        title: "Cervesa Somera",
        description: "Cervesa artesana",
        url: "https://www.cervesasomera.com", // No trailing slash allowed!
        image: "favicon.ico", // Path to your image you placed in the 'static' folder
    },
    /* Your site config here */
};
