import React, { useState, useContext } from "react";
import cat from "../../../static/cat_flag.svg";
import esp from "../../../static/spain.svg";
import lletra from "../../../static/lletra.png";
import { LangContext } from "../../context/lang";
import style from "./flag.module.css";

const Flag = () => {
    const [lang, setLang] = useContext(LangContext);
    const [content, setContent] = useState("");

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
