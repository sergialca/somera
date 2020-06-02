import React, { useState, useEffect, useContext, Fragment } from "react";
import { LangContext } from "../../context/lang";
import axios from "axios";
import cookie from "react-cookies";
import style from "./gdpr.module.css";

const Gdpr = ({ children }) => {
    const [someraCookies, setSomeraCookies] = useState({ gdpr: false });
    const [lang, setLang] = useContext(LangContext);
    const [content, setContent] = useState("hello");

    useEffect(() => {
        const co = cookie.load("someraCookies");
        if (co === "notAcc") setSomeraCookies({ gdpr: false });
        else if (co === "acc") setSomeraCookies({ gdpr: true });
        else cookie.save("someraCookies", "notAcc");
    }, []);

    useEffect(() => {
        if (lang[0].site === "cat") catContent();
        else if (lang[0].site === "esp") espContent();
    }, [lang]);

    const catContent = async () => {
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/cookiesCat",
        });
        setContent(res.data[0]);
    };

    const espContent = async () => {
        const res = await axios({
            url: "https://someraserver.herokuapp.com/api/cookiesEsp",
        });
        setContent(res.data[0]);
    };

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
