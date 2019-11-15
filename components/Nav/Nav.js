import React, { useState } from "react";
import Link from "next/link";

import { NavStyle } from "./NavStyle";
import Paragraph from "../../styles/fontsStyles/paragraph";



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
                    <Link href="/index"><img src="/static/svg/openMenu.svg" /></Link>

                </div>
                <nav className="navMobile">
                    <div>
                        <Link href="/index"><img src="/static/svg/closeMenu.svg" /></Link>
                    </div>
                    <div>
                        <Link href="/about"><Paragraph size="13px" >{t("nav1")}</Paragraph></Link>
                        <Link href="/about"><Paragraph size="13px" >{t("nav2")}</Paragraph></Link>
                        <Link href="/about"><Paragraph size="13px" >{t("nav5")}</Paragraph></Link>
                        <div>
                        <Paragraph size="13px" >{t("nav2")}</Paragraph>
                        <Link href="/about"><Paragraph size="13px" >{t("nav6")}</Paragraph></Link>
                        </div>
                    </div>
                </nav>
            </header>
            
            <header className="desktop">
                <div className="logo">
                    <Link href="/index"><img src="/static/svg/logoMapaAyuda.svg" /></Link>
                </div>
                <nav>
                    <Link href="/about"><Paragraph size="13px" >{t("nav1")}</Paragraph></Link>
                    <Link href="/about"><Paragraph size="13px" >{t("nav2")}</Paragraph></Link>
                    <Link href="/about"><Paragraph size="13px" >{t("nav3")}</Paragraph></Link>
                    <Link href="/about"><Paragraph size="13px" >{t("nav4")}</Paragraph></Link>
                    <Link href="/about"><Paragraph size="13px" >{t("nav5")}</Paragraph></Link>
                </nav>
            </header>

        </NavStyle>
    );
};

export default withTranslation("nav")(Nav);
