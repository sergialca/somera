import React, { useState } from "react";
import style from "./form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = event => {
        if (event) event.preventDefault();
    };

    const nameChange = event => {
        console.log("event canvi nom ", event.target.value);
    };

    const emailChange = event => {
        console.log("event canvi mail ", event.target.value);
    };

    const handleChange = event => {
        event.persist();
    };
    return (
        <div className={style.formWrapper}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.title}>Contacta</div>
                <label>
                    Nom <span className={style.required}>*</span>
                </label>
                <input type="text" name="name" value={name} onChange={nameChange} required />
                <label>
                    {" "}
                    Email <span className={style.required}>*</span>
                </label>
                <input type="email" name="email" value={email} onChange={emailChange} required />
                <label>
                    Comentari <span className={style.required}>*</span>
                </label>
                <textarea className={style.textArea} name="comment" rows="4" cols="50" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
