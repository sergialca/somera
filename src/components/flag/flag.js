import React, { useState, useContext } from "react";
import { LangContext } from "../../context/lang";
import style from "./flag.module.css";

const Flag = () => {
    const [lang, setLang] = useContext(LangContext);

    const select = async event => {
        let val = event.target.value;
        if (val === "cat") {
            setLang("cat");
        } else if (val === "esp") {
            setLang("esp");
        }
    };

    return (
        <select className={style.selector} onChange={select}>
            <option value="cat">Cat</option>
            <option value="esp">Esp</option>
        </select>
    );
};

export default Flag;
