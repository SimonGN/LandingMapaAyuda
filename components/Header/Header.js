import React, { useState } from "react";
import Link from "next/link";

import { HeaderStyle } from "./HeaderStyle";
import Button from "../Button/Button";
import CardExperience from "../CardExperience/CardExperience"


import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";


import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Header = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <HeaderStyle>
            <main>
                <ParagraphTitle align="center">{t("intro")}</ParagraphTitle>
                <Button content={t("button")} color="white" />
                <CardExperience />
                <div className="icon">
                    <img className="icon1" src="/static/svg/iconHomeGalery0.svg" />
                    <img className="icon2" src="/static/svg/iconHomeGalery1.svg" />
                    <img className="icon3" src="/static/svg/iconHomeGalery2.svg" />
                    <img className="icon4" src="/static/svg/iconHomeGalery3.svg" />
                    <img className="icon5" src="/static/svg/iconHomeGalery4.svg" />
                </div>
            </main>
            

        </HeaderStyle>
    );
};

export default withTranslation("home")(Header);
