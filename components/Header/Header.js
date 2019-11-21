import React, { useState } from "react";
import Link from "next/link";

import { HeaderStyle } from "./HeaderStyle";
import Button from "../Button/Button";


import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";


import { i18n, withTranslation } from '../../i18n'
import CardAll from "../CardExperience/CardAll";



const Header = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <HeaderStyle>
            <main>
                <ParagraphTitle align="center">{t("intro")}</ParagraphTitle>
                <Button content={t("button")} color="white" />
            </main>
            <div className="card">
                <CardAll/>
            </div>
            
        </HeaderStyle>
    );
};

export default withTranslation("home")(Header);
