import React from "react";
import style from "./right.module.css";

const Right = props => {
    return (
        <div className={style.intro}>
            <div className={style.textIntro}>
                <span className={`${style.title} ${style.second}`}>{props.title}</span>
                <p className={`${style.justify} ${style.font}`}>{props.text}</p>
            </div>
        </div>
    );
};

export default Right;
