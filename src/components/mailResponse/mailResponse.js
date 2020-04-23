import React from "react";
import style from "./mailResponse.module.css";

const MailResponse = props => {
    const mail = <a href="mailto:info.somera@gmail.com">aquí</a>;
    const ok = "Mail enviat correctament";
    const bad = `Hi ha hagut un problema a l'hora d'enviar el correu, torna-ho a intentar o envia un correu directament`;

    return props.showResponse.show ? (
        <div className={props.class === "ok" ? style.ok : style.bad}>
            {props.class === "ok" ? (
                ok
            ) : (
                <span>
                    {bad} {mail}
                    {", gràcies."}
                </span>
            )}
        </div>
    ) : (
        ""
    );
};

export default MailResponse;
