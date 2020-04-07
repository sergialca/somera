import React from "react";
import style from "./varietat.module.css";

const Varietat = props => {
    return (
        <div className={style.wrapperVar}>
            <div>
                <img className={style.imgVar} src={props.imgSrc} alt={props.alt}></img>
            </div>
            <div className={style.wrapperText}>
                <div className={style.subTitle}>{props.subTitle}</div>
                {props.text}
            </div>
        </div>
    );
};

export default Varietat;
