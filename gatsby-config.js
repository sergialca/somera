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
        {
            resolve: "gatsby-source-prismic-graphql",
            options: {
                repositoryName: "gatsby-source-prismic-somera", // required
                defaultLang: "ca", // optional, but recommended
                accessToken: "...", // optional
                prismicRef: "...", // optional, default: master; useful for A/B experiments
                path: "/preview", // optional, default: /preview
                previews: true, // optional, default: false
                pages: [
                    {
                        // optional
                        //type: "Article", // TypeName from prismic
                        //match: "/article/:uid", // pages will be generated under this pattern
                        //previewPath: "/article", // optional path for unpublished documents
                        //component: require.resolve("./src/templates/article.js"),
                        //sortBy: "date_ASC", // optional, default: meta_lastPublicationDate_ASC; useful for pagination
                    },
                ],
                extraPageFields: "article_type", // optional, extends pages query to pass extra fields
                sharpKeys: [
                    /image|photo|picture/, // (default)
                    "profilepic",
                ],
            },
        },
    ],
    /* Your site config here */
};
