import React, { useState } from "react";
import axios from "axios";
import MailResponse from "../mailResponse/mailResponse";
import PacmanLoader from "react-spinners/PacmanLoader";
import style from "./form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    const [vals, setVals] = useState(true);
    const [errorName, setErrorName] = useState();
    const [errorMail, setErrorMail] = useState();
    const [errorComment, setErrorComment] = useState();
    const [showResponse, setShowResponse] = useState({ show: false });
    const [responseClass, setResponseClass] = useState("ok");
    const [loadSpinner, setLoadSpinner] = useState(false);

    const handleSubmit = event => {
        if (event) event.preventDefault();
        setLoadSpinner(true);
        setShowResponse({ show: false });
        axios({
            method: "post",
            url: "https://someraserver.herokuapp.com/api/mail",
            data: {
                name: vals.name,
                mail: vals.mail,
                comment: vals.comment,
                common: "2605ff3c874ec45fbb0fbd03834597c6",
                www: window.location.host,
            },
        })
            .then(function(response) {
                setLoadSpinner(false);
                if (response.data === "ok") {
                    setShowResponse({ show: true });
                    setResponseClass(response.data);
                    document.getElementById("contact").reset();
                } else {
                    setShowResponse({ show: true });
                    setResponseClass(response.data);
                }
            })
            .catch(function(error) {
                console.log("Form -> error", error);
                setLoadSpinner(false);
                setShowResponse({ show: true });
                setResponseClass("bad");
            });
    };

    const nameChange = event => {
        if (event.target.value) {
            setErrorName("");
            setVals({ ...vals, name: event.target.value });
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
        } else {
            setVals({ ...vals, mail: event.target.value });
            setErrorMail("");
        }
    };

    const commentChange = event => {
        if (event.target.value) {
            setErrorComment("");
            setVals({ ...vals, comment: event.target.value });
        } else {
            setErrorComment("Camp obligatori");
        }
    };
    return (
        <div className={style.formWrapper}>
            <form id="contact" className={style.form} onSubmit={handleSubmit}>
                <div className={style.subTitle}>Contacta</div>
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
                    rows="8"
                    cols="50"
                    required
                />
                <div className={style.noValid}>{errorComment}</div>
                <div className={style.btnEnviarWrapper}>
                    <button className={style.btnEnviar} type="submit">
                        Enviar
                    </button>
                </div>
                <div className={style.spinnerWrapper}>
                    <PacmanLoader loading={loadSpinner} color="#F3A400" />
                </div>
                <MailResponse showResponse={showResponse} class={responseClass} />
            </form>
        </div>
    );
};

export default Form;
