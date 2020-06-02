import React from "react";
import style from "./lab.module.css";

const Lab = props => {
    return (
        <div className={style.wrapperVar}>
            <div>
                <img className={style.imgVar} src={props.imgSrc} alt={props.alt}></img>
            </div>
            <div className={style.wrapperText}>
                <div className={style.subTitle}>{props.subTitle}</div>
                {props.text}
                <br></br>
                <ul>
                    <li className={style.left}>
                        <span className={style.part}>{props.lab1}</span>
                        {props.lab1Text}
                    </li>
                    <li className={style.left}>
                        <span className={style.part}>{props.lab2}</span>
                        {props.lab2Text}
                    </li>
                    <li className={style.left}>
                        <span className={style.part}>{props.lab3}</span>
                        {props.lab3Text}
                    </li>
                    <li className={style.left}>
                        <span className={style.part}>{props.lab4}</span>
                        {props.lab4Text}
                    </li>
                </ul>
                <div className={style.info}>{props.info}</div>
            </div>
        </div>
    );
};

export default Lab;
