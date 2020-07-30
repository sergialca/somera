/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: "",
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
        title: "Somera",
        description: "Cervesa artesana",
        url: "https://www.cervesasomera.com",
        image: "./static/somera_intro.png",
        author: "sergialca",
    },
};
