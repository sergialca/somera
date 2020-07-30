import React, { useState, useEffect, useContext, Fragment } from "react";
import { LangContext } from "../../context/lang";
import gdprCa from "../../json/gdprCa.json";
import gdprEs from "../../json/gdprEs.json";
import cookie from "react-cookies";
import style from "./gdpr.module.css";

const Gdpr = ({ children }) => {
    const [someraCookies, setSomeraCookies] = useState({ gdpr: false });
    const { lang } = useContext(LangContext);
    const [content, setContent] = useState("hello");

    useEffect(() => {
        const co = cookie.load("someraCookies");
        if (co === "notAcc") setSomeraCookies({ gdpr: false });
        else if (co === "acc") setSomeraCookies({ gdpr: true });
        else cookie.save("someraCookies", "notAcc");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (lang === "cat") setContent(() => gdprCa);
            else if (lang === "esp") setContent(() => gdprEs);
        }, 500);
    }, [lang]);

    const accepted = () => {
        setSomeraCookies({ gdpr: true });
        cookie.save("someraCookies", "acc");
    };

    return (
        <Fragment>
            {children}
            <div className={someraCookies.gdpr ? style.hide : style.show}>
                <span>{content.cookiesText}</span>
                <button onClick={accepted}>{content.cookiesBtn}</button>
            </div>
        </Fragment>
    );
};

export default Gdpr;
