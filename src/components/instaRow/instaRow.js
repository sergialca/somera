import React from "react";
import style from "./instaRow.module.css";

const InstaRow = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.text}>
                No et perdis cap novetat! Totes les notícies i esdeveniments a Instagram
            </span>
            <div className={style.contLink}>
                <a
                    className={style.link}
                    href="https://www.instagram.com/someracervesaartesana/?hl=es"
                >
                    Segueix-nos
                </a>
            </div>
        </div>
    );
};

export default InstaRow;
