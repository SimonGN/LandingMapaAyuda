import React, { useState } from "react";
import Link from "next/link";

import { SearchStyle } from "./SearchStyle";
import Button from "../Button/Button";



import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphHeader from "../../styles/fontsStyles/paragraphHeader"


import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}


const Search = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <SearchStyle>
            <div className="img">
                <div className="icon">
                    <img className="iconWord" src="/static/svg/iconWord.svg" />
                    <div>
                        <img className="iconTicket"src="/static/svg/iconTicket.svg" />
                    </div>
                </div>
            </div>

            <div className="text">
                <ParagraphTitle className="title" align="left" >{t("intro1")}</ParagraphTitle>
                <ParagraphHeader className="subTitle"align="left" color="#80A8E5">{t("subTitle1")}</ParagraphHeader>
                <ParagraphBodyRegular className="paragraph"align="left" color="#999999">{t("description1")}</ParagraphBodyRegular>
                <Button content={t("button2")} backgroundColor="#D2E4F9" color="#1C76E3"/>
            </div>

        </SearchStyle>
    );
};

export default withTranslation("home")(Search);
