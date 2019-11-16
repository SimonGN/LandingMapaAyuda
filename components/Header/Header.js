import React, { useState } from "react";
import Link from "next/link";

import { HeaderStyle } from "./HeaderStyle";
import Button from "../Button/Button";


import ParagraphMedium from "../../styles/fontsStyles/paragraphMedium";
import ParagraphMediumMobile from "../../styles/fontsStyles/paragraphMediumMobile";



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
                <ParagraphMedium>{t("intro")}</ParagraphMedium>
                <Button content={t("button")} color="white"/>
                
            </main>
            

        </HeaderStyle>
    );
};

export default withTranslation("home")(Header);
