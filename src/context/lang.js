import React, { createContext, useState } from "react";

export const LangContext = createContext("cat");
export const LangProvider = props => {
    const [lang, setLang] = useState("cat");

    return <LangContext.Provider value={{ lang, setLang }}>{props.children}</LangContext.Provider>;
};
