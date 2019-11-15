import React, { useState } from "react";
import Link from "next/link";

import { HeaderStyle } from "./HeaderStyle";
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
        <HeaderStyle>
            <div>
                <ParagraphMedium>{t("")}</ParagraphMedium>
            </div>
            

        </HeaderStyle>
    );
};

export default withTranslation("home")(Header);
