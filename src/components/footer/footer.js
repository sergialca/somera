import React from "react";
import email from "../../../static/email.png";
import insta from "../../../static/instagram.png";
import style from "./footer.module.css";

const Footer = props => {
    return (
        <div className={style.footerWrapper}>
            <span className={style.text}>Somera – Cervesa Artesana</span>
            <div>
                <a href="mailto:info.somera@gmail.com">
                    <img className={style.mail} src={email} alt="logo mail"></img>
                </a>
                <a href="https://www.instagram.com/someracervesaartesana/?hl=es">
                    <img className={style.insta} src={insta} alt="logo Instagram"></img>
                </a>
            </div>
            <span className={style.text}>Santa Margarida de Montbui, Barcelona.</span>
            <span className={style.subText}>{props.alc}</span>
            <span className={style.subText}>
                Icons made by{" "}
                <a href="https://www.flaticon.com/authors/chanut" title="Chanut">
                    Chanut
                </a>
                {" and "}
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    {" "}
                    www.flaticon.com
                </a>
            </span>
        </div>
    );
};

export default Footer;
