import React from "react";
import GDPR from "./src/components/gdpr/gdpr";
import { LangProvider } from "./src/context/lang";

export const wrapPageElement = ({ element }) => (
    <LangProvider>
        <GDPR>{element}</GDPR>
    </LangProvider>
);

export default wrapPageElement;
