import React, { useState } from "react";
import Link from "next/link";
import { withSize } from 'react-sizeme'

import { NavStyle } from "./NavStyle";

import ParagraphBody from "../../styles/fontsStyles/ParagraphBody";
import ParagraphHeader from "../../styles/fontsStyles/ParagraphHeader";



import { i18n, withTranslation } from '../../i18n'


const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Nav = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    const [ view, setView ] = useState(false);
    const handleOpen = () => {
        const value = !view;
        setView(value);
      };
    return (
        <NavStyle view={view}>
            <header className="mobile">
                <div className="symbol">
                    <Link href="/index"><img src="/static/svg/symbolMapaAyuda.svg" /></Link>
                    <img  onClick={handleOpen} cursor={"true"} src="/static/svg/openMenu.svg" />

                </div>
                <nav>
                    <div className="navColor"></div>
                    <div className="navMobile">
                        <img  cursor={"true"} onClick={handleOpen} src="/static/svg/closeMenu.svg" />

                        <div className="navMenuMobile">
                            <div className="navMenu1">
                                <Link href=""><ParagraphHeader >{t("nav1")}</ParagraphHeader></Link>
                                <Link href=""><ParagraphHeader >{t("nav2")}</ParagraphHeader></Link>
                            </div>
                            <div className="navMenu2">
                                <Link href=""><button>{t("nav5")}</button></Link>
                                <div>
                                    <ParagraphHeader size="16px"color="#76991E">{t("text")}</ParagraphHeader>
                                    <Link href=""><ParagraphHeader size="16px" color="#76991E" >{t("nav6")}</ParagraphHeader></Link>
                                </div>
                                <img src="/static/svg/logoMapaAyuda.svg" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <header className="desktop">
                <div className="logo">
                    <Link href="/index"><img src="/static/svg/logoMapaAyuda.svg" /></Link>
                </div>
                <nav>
                    <Link href="/"><ParagraphBody >{t("nav1")}</ParagraphBody></Link>
                    <Link href="/"><ParagraphBody >{t("nav2")}</ParagraphBody></Link>
                    <Link href="/"><ParagraphBody color="#F1A409" >{t("nav3")}</ParagraphBody></Link>
                    <Link href="/login"><ParagraphBody color="#76991E">{t("nav4")}</ParagraphBody></Link>
                    <Link href="/"><button>{t("nav5")}</button></Link>
                </nav>
            </header>

        </NavStyle>
    );
};

export default withTranslation("nav")(withSize()(Nav));
