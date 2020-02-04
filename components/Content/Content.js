import React, { useState } from "react";
import Link from "next/link";

import { ContentStyle } from "./ContentStyle";
import Button from "../Button/Button";


import ParagraphTitle from "../../styles/fontsStyles/ParagraphTitle";


import { i18n, withTranslation } from '../../i18n'




const Content = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <ContentStyle>
            <div className="yellow">
                <ParagraphTitle align="left" color="#ED5C18">{t("intro4")}</ParagraphTitle>
                <div className="iconOlas">
                    <img src="/static/svg/iconOlasOrange.svg" />
                </div>
                
            </div>
            <div className="opacityYellow">
                <div className="icons">
                    <img src="/static/svg/iconTalk.svg" />
                    <div className="iconPlant">
                        <img src="/static/svg/iconPlant.svg" />
                    </div>
                </div>
                <ParagraphTitle align="left"color="#ED5C18">{t("description4")}</ParagraphTitle>
                <div className="button">
                    <Button content={t("button5")} backgroundColor="#ED5C1850" color="#ED5C18" />

                </div>
            </div>

        </ContentStyle>
    );
};

export default withTranslation("home")(Content);
