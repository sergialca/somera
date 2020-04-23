import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import { Link } from "gatsby";
import Fade from "react-bootstrap/Fade";
import imgPortada from "../../../static/portada.png";
import style from "./modal.module.css";

const Modal = () => {
    const [isAdult, setIsAdult] = useState({ adult: false });

    useEffect(() => {
        const co = cookie.load("someraCookiesAdult");
        if (co === "Yes") setIsAdult({ adult: true });
        else if (co === "No") setIsAdult({ adult: false });
        else cookie.save("someraCookiesAdult", "No");
    }, []);

    const onAccept = () => {
        cookie.save("someraCookiesAdult", "Yes");
        setIsAdult({ adult: true });
    };

    return (
        <Fade
            timeout={500}
            in={isAdult.adult ? false : true}
            unmountOnExit
            className={style.portada}
        >
            <div>
                <div className={style.wrapper}>
                    <img src={imgPortada} alt="title" className={style.imgPortada} />
                    <span className={style.text}>Tens més de 18 anys?</span>
                    <div className={style.btnWrapper}>
                        <Link to="/#cervesa" onClick={onAccept} className={style.linkPortada}>
                            Si
                        </Link>
                        <Link to="/" className={`${style.linkPortada} ${style.btnSecond}`}>
                            No
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Modal;
