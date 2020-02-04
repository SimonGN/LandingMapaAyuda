import React, { useState } from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";

import ParagraphTitle from "../../styles/fontsStyles/ParagraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/ParagraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/ParagraphBodySmall";




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
                    <div className="iconWord" >
                        <img src="/static/svg/iconMapaAyuda.svg" />
                    </div>
                    <div className="navSeo">
                        <div className="idiomsMovil">
                            <ParagraphBodySmall className="animate" decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</ParagraphBodySmall>
                            <ParagraphBodySmall> / </ParagraphBodySmall>
                            <ParagraphBodySmall className="animate" decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</ParagraphBodySmall>
                        </div>
                        <div className="navegation">
                            <ParagraphBodyRegular color="#000000">{t("nav1")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav1info1")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav1info2")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#F1A409">{t("nav1info3")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#76991E">{t("nav1info4")}</ParagraphBodyRegular>
                        </div>
                        <div className="voluntary">
                            <ParagraphBodyRegular color="#000000">{t("nav2")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav2info1")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav2info2")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav2info3")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav2info4")}</ParagraphBodyRegular>
                        </div>
                        <div className="moreInfo">
                            <ParagraphBodyRegular color="#000000">{t("nav3")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav3info1")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav3info2")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav3info3")}</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#666666">{t("nav3info4")}</ParagraphBodyRegular>
                        </div>
                    </div>
                     
                    <div className="nameText">
                        <div className="idioms">
                            <ParagraphBodySmall className="animate" decoration={language === 'es' ? "underline" : ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</ParagraphBodySmall>
                            <ParagraphBodySmall> / </ParagraphBodySmall>
                            <ParagraphBodySmall className="animate" decoration={language === 'en' ? "underline" : ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</ParagraphBodySmall>
                        </div>
                        <div className="legal">
                            <ParagraphBodySmall size="12px">{t("cc")}</ParagraphBodySmall>
                            <div className="sectionLegal">
                                <Link href="/about"><ParagraphBodySmall size="12px" >{t("link1")}</ParagraphBodySmall></Link>
                                <Link href="/about"><ParagraphBodySmall size="12px">{t("link2")}</ParagraphBodySmall></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </FooterStyle>
    );
};

export default withTranslation("footer")(Footer);
