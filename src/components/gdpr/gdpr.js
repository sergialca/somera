import React, { useState, useEffect, Fragment } from "react";
import cookie from "react-cookies";
import style from "./gdpr.module.css";

const Gdpr = ({ children }) => {
    const [someraCookies, setSomeraCookies] = useState({ gdpr: false });

    useEffect(() => {
        const co = cookie.load("someraCookies");
        if (co === "notAcc") setSomeraCookies({ gdpr: false });
        else if (co === "acc") setSomeraCookies({ gdpr: true });
        else cookie.save("someraCookies", "notAcc");
    }, []);

    const accepted = () => {
        setSomeraCookies({ gdpr: true });
        cookie.save("someraCookies", "acc");
    };

    return (
        <Fragment>
            {children}
            <div className={someraCookies.gdpr ? style.hide : style.show}>
                <span>
                    Aquesta web utilitza cookies per guardar el nom i l'e-mail a l'hora de contactar
                    amb nosaltres a més de cookies d'analítica. Al navegar per la nostra web,
                    accepta l'ús de les cookies.
                </span>
                <button onClick={accepted}>Acceptar</button>
            </div>
        </Fragment>
    );
};

export default Gdpr;
