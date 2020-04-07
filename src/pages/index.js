import React from "react";
import { Link } from "gatsby";
import imgPortada from "../../static/portada.png";
import style from "./index.module.css";

const Index = () => (
    <div className={style.portada}>
        <img src={imgPortada} alt="title" className={style.imgPortada} />
        <span className={style.text}>Tens més de 18 anys?</span>
        <div className={style.btnWrapper}>
            <Link to="/main" className={style.linkPortada}>
                Si
            </Link>
            <Link to="/" className={`${style.linkPortada} ${style.btnSecond}`}>
                No
            </Link>
        </div>
    </div>
);

export default Index;
