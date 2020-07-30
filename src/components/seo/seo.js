import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon32 from "../../../static/favicon32.png";

const Seo = ({ title, description }) => {
    const { site } = useStaticQuery(query);

    const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${defaultImage}`,
        url: `${siteUrl}`,
    };
    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <link rel="icon" type="image/png" href={favicon32} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
        </Helmet>
    );
};

export default Seo;

const query = graphql`
    query Seo {
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
