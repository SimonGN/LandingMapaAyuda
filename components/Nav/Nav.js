import React, { useState } from "react";
import Link from "next/link";

import { NavStyle } from "./NavStyle";
import ParagraphMedium from "../../styles/fontsStyles/paragraphMedium";
import ParagraphMediumMobile from "../../styles/fontsStyles/paragraphMediumMobile";



import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Nav = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <NavStyle >
            <header className="mobile">
                <div className="symbol">
                    <Link href="/index"><img src="/static/svg/symbolMapaAyuda.svg" /></Link>
                    <Link href="/"><img src="/static/svg/openMenu.svg" /></Link>

                </div>
                <nav>
                    <div className="navColor"></div>
                    <div className="navMobile">
                        <div className="navMenuMobile">
                            <div className="navMenu1">
                                <Link href=""><ParagraphMediumMobile >{t("nav1")}</ParagraphMediumMobile></Link>
                                <Link href=""><ParagraphMediumMobile >{t("nav2")}</ParagraphMediumMobile></Link>
                            </div>
                            <div className="navMenu2">
                                <Link href=""><button>{t("nav5")}</button></Link>
                                <div>
                                    <ParagraphMediumMobile size="16px"color="#76991E">{t("text")}</ParagraphMediumMobile>
                                    <Link href=""><ParagraphMediumMobile size="16px" color="#76991E" >{t("nav6")}</ParagraphMediumMobile></Link>
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
                    <Link href="/about"><ParagraphMedium >{t("nav1")}</ParagraphMedium></Link>
                    <Link href="/about"><ParagraphMedium >{t("nav2")}</ParagraphMedium></Link>
                    <Link href="/about"><ParagraphMedium color="#F1A409" >{t("nav3")}</ParagraphMedium></Link>
                    <Link href="/about"><ParagraphMedium color="#76991E">{t("nav4")}</ParagraphMedium></Link>
                    <Link href="/about"><button>{t("nav5")}</button></Link>
                </nav>
            </header>

        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
