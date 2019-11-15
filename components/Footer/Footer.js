import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";
import ParagraphMedium from "../../styles/fontsStyles/paragraphMedium";



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
            <div className="footer">
                <div className="option">
                    <a href={`mailto:${email}`}><ParagraphMedium size="13px" >{t("email")}</ParagraphMedium></a>
                    <a href={`tel:${phone}`}><ParagraphMedium size="13px" >{t("phone")}</ParagraphMedium></a>
                    <a href="/"><ParagraphMedium size="13px" >{t("termsConditions")}</ParagraphMedium></a>
                    <a href="/"><ParagraphMedium size="13px" >{t("privacyPolicy")}</ParagraphMedium></a>
                </div>
                <div className="len">
                    <ParagraphMedium size="13px" decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</ParagraphMedium>
                    <ParagraphMedium size="13px" >/</ParagraphMedium>
                    <ParagraphMedium size="13px" decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</ParagraphMedium>
                </div>
            </div>
            <div className="copy">
                <ParagraphMedium size="10px" spacing="0,5px" lineheight="13px">
                    Copyright © by ––––––––, 2019. All rights reserved. All materials
                    on this website are intellectual property of ––––––––.
                </ParagraphMedium>
            </div>

        </FooterStyle>
    );
};

export default withTranslation("footer")(Footer);
