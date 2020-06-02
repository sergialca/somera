import React from "react";
import InstagramEmbed from "react-instagram-embed";
import style from "./instaRow.module.css";

const InstaRow = props => {
    return (
        <div className={style.back}>
            <div className={style.wrapper}>
                <span className={style.text}>{props.text}</span>
                <div className={style.contLink}>
                    <a
                        className={style.link}
                        href="https://www.instagram.com/someracervesaartesana/?hl=es"
                    >
                        {props.btn}
                    </a>
                </div>
            </div>
            <div className={style.feed}>
                <InstagramEmbed
                    url="https://www.instagram.com/p/B-URYrgJwSw/?hl=es"
                    maxWidth={320}
                    hideCaption
                />
                <InstagramEmbed
                    url="https://www.instagram.com/p/CAZ7ciZpCTn/?hl=es"
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

export default InstaRow;
