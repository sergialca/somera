import React, { useState } from "react";
import style from "./form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    const [errorName, setErrorName] = useState();
    const [errorMail, setErrorMail] = useState();
    const [errorComment, setErrorComment] = useState();

    const handleSubmit = event => {
        console.log("submit");
        if (event) event.preventDefault();
    };

    const nameChange = event => {
        if (event.target.value) {
            setErrorName("");
        } else {
            setErrorName("Camp obligatori");
        }
    };

    const emailChange = event => {
        if (
            event.target.value &&
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                event.target.value
            )
        ) {
            setErrorMail("Mail no vàlid");
        } else if (!event.target.value) {
            setErrorMail("Camp obligatori");
        } else setErrorMail("");
    };

    const commentChange = event => {
        if (event.target.value) {
            setErrorComment("");
        } else {
            setErrorComment("Camp obligatori");
        }
    };
    return (
        <div className={style.formWrapper}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Nom <span className={style.required}>*</span>
                </label>
                <input
                    className={errorName ? style.errorClass : ""}
                    type="text"
                    name="name"
                    onChange={nameChange}
                    required
                />
                <div className={style.noValid}>{errorName}</div>
                <label htmlFor="email">
                    Mail <span className={style.required}>*</span>
                </label>
                <input
                    className={errorMail ? style.errorClass : ""}
                    type="email"
                    name="email"
                    onChange={emailChange}
                    required
                />
                <div className={style.noValid}>{errorMail}</div>
                <label htmlFor="comment">
                    Comentari <span className={style.required}>*</span>
                </label>
                <textarea
                    className={errorComment ? style.errorClass : style.textArea}
                    onChange={commentChange}
                    name="comment"
                    rows="4"
                    cols="50"
                    required
                />
                <div className={style.noValid}>{errorComment}</div>
                <div className={style.btnEnviarWrapper}>
                    <button className={style.btnEnviar} type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
