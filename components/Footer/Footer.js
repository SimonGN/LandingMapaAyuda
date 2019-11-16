import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Footer = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    const email = t("email");
    const phone = t("phone");
    return (
        <FooterStyle >
            

        </FooterStyle>
    );
};

export default withTranslation("footer")(Footer);
