import React, { useState } from "react";
import Link from "next/link";

import { WeStyle } from "./WeStyle";
import Button from "../Button/Button";



import ParagraphBodyRegular from "../../styles/fontsStyles/ParagraphBodyRegular";
import ParagraphTitle from "../../styles/fontsStyles/ParagraphTitle";
import ParagraphHeader from "../../styles/fontsStyles/ParagraphHeader"


import { i18n, withTranslation } from '../../i18n'

const We = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <WeStyle>
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
                <div className="button"> 
                    <Button backgroundColor="#D2E4F9" color="#1C76E3">
                        {t("button2")}
                    </Button>
                </div>
            </div>

        </WeStyle>
    );
};

export default withTranslation("home")(We);
