import React from "react";
import GDPR from "./src/components/gdpr/gdpr";

export const wrapPageElement = ({ element, props }) => <GDPR {...props}>{element}</GDPR>;

export default wrapPageElement;
