import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon32 from "../../../static/favicon32.png";

const Seo = ({ title, description, image }) => {
    const { site } = useStaticQuery(query);

    const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}`,
    };
    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            <link rel="icon" type="image/png" href={favicon32} />
        </Helmet>
    );
};

export default Seo;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
                defaultImage: image
            }
        }
    }
`;
