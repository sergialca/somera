import React, { useContext } from "react";
import { LangContext } from "../../context/lang";
import style from "./flag.module.css";

const Flag = () => {
    const [lang, setLang] = [useContext(LangContext), useContext(LangContext)];

    const select = async event => {
        let val = event.target.value;
        if (val === "cat") {
            setLang[1]("cat");
        } else if (val === "esp") {
            setLang[1]("esp");
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
