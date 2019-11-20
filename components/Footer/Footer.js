import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";

import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";




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
        <FooterStyle display={props.display}>
            <div className="green">
                <div className="icon">
                    <img className="iconMap" src="/static/svg/iconMapa.svg" />
                </div>
                <div className="textGreen">
                    <ParagraphTitle align="center">{t("title")}</ParagraphTitle>
                    <ParagraphBodyRegular color="#000000" align="center">{t("subTitle")}</ParagraphBodyRegular>
                </div>
                <div className="button">
                    <Button content={t("button1")} backgroundColor="#E4EBD2" color="#76991E" />
                </div>

            </div>
            <div className="greenOpacity">
                <div className="textGreenOpacity">
                    <div className="nameText">
                        <div className="iconWord" >
                            <img src="/static/svg/iconMapaAyuda.svg" />
                        </div>
                        <div className="cc">
                            <ParagraphBodySmall align="center">{t("cc")}</ParagraphBodySmall>
                        </div>

                        <div className="idioms">
                            <ParagraphBodySmall className="animate" decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</ParagraphBodySmall>
                            <ParagraphBodySmall> / </ParagraphBodySmall>
                            <ParagraphBodySmall className="animate" decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</ParagraphBodySmall>
                        </div>
                    </div>

                    <div className="navLegal">
                        <nav>
                            <Link href="/"><ParagraphBody >{t("nav1")}</ParagraphBody></Link>
                            <Link href="/"><ParagraphBody >{t("nav2")}</ParagraphBody></Link>
                            <Link href="/"><ParagraphBody color="#F1A409" >{t("nav3")}</ParagraphBody></Link>
                            <Link href="/"><ParagraphBody color="#76991E">{t("nav4")}</ParagraphBody></Link>
                            <Link href="/"><button>{t("nav5")}</button></Link>
                        </nav>
                        <div className="legal">
                            <Link href="/about"><ParagraphBodySmall >{t("link1")}</ParagraphBodySmall></Link>
                            <Link href="/about"><ParagraphBodySmall >{t("link2")}</ParagraphBodySmall></Link>
                        </div>
                    </div>

                </div>
            </div>


        </FooterStyle>
    );
};

export default withTranslation(["footer","nav"])(Footer);
