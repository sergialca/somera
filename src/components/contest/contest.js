import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./contest.module.css";

const Contest = props => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>{props.title}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    );
};

export default Contest;
