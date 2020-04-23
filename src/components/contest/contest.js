import React from "react";
import InstagramEmbed from "react-instagram-embed";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./contest.module.css";

const Contest = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Somera People</div>
            <div className={style.content}>
                <InstagramEmbed
                    url="https://www.instagram.com/p/B-URYrgJwSw/?hl=es"
                    maxWidth={320}
                    hideCaption
                />
                <InstagramEmbed
                    url="https://www.instagram.com/p/B49sVtAF2b7/"
                    maxWidth={320}
                    hideCaption
                />
                <InstagramEmbed
                    url="https://www.instagram.com/p/B29jLhaFQk2/"
                    maxWidth={320}
                    hideCaption
                />
            </div>
        </div>
    );
};

export default Contest;
