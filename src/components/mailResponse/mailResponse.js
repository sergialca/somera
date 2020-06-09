import React from "react";
import style from "./mailResponse.module.css";

const MailResponse = props => {
    console.log("props", props);
    const mail = <a href="mailto:info.somera@gmail.com">aquí</a>;

    return props.showResponse.show ? (
        <div className={props.class === "ok" ? style.ok : style.bad}>
            {props.class === "ok" ? (
                <span>{props.ok}</span>
            ) : (
                <span>
                    {props.bad} {mail}
                    {props.ty}
                </span>
            )}
        </div>
    ) : (
        ""
    );
};

export default MailResponse;
