import React from "react";
import style from "./left.module.css";

const Left = props => {
    return (
        <div className={style.pack}>
            <div className={style.textPack}>
                <span className={`${style.title} ${style.second}`}>{props.title}</span>
                <p className={`${style.justify} ${style.font}`}>{props.text}</p>
            </div>
        </div>
    );
};

export default Left;
