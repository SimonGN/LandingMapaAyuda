import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";

import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";




import { i18n, withTranslation } from '../../i18n'
import Button from "../Button/Button";

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Footer = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <FooterStyle >
            <div className="green">
                <ParagraphTitle align="center">{t("title")}</ParagraphTitle>
                <ParagraphBodyRegular color="#000000"align="center">{t("subTitle")}</ParagraphBodyRegular>
                <Button/>
            </div>
            <div className="greenOpacity">
                <div>
                    <img className="iconWord" src="/static/svg/iconWord.svg" />
                    <ParagraphTitle align="center">{t("intro")}</ParagraphTitle>
                </div>
                <div>
                    <div>
                        <Link href="/about"><ParagraphBody >{t("nav1")}</ParagraphBody></Link>
                        <Link href="/about"><ParagraphBody >{t("nav2")}</ParagraphBody></Link>
                    </div>
                </div>
            </div>
            

        </FooterStyle>
    );
};

export default withTranslation("footer")(Footer);
