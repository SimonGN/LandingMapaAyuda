import React, { useState } from "react";
import Link from "next/link";

import { GaleryStyle } from "./GaleryStyle";
import Button from "../Button/Button";



import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphHeader from "../../styles/fontsStyles/paragraphHeader"


import { i18n, withTranslation } from '../../i18n'

const Galery = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <GaleryStyle>
            <ParagraphTitle className="description">{t("galeryIntro")}</ParagraphTitle>
            <div>
                <div className="imgFondo"></div>
                <div>
                    <ParagraphHeader>{t("description3")}</ParagraphHeader>
                </div>
            </div>

        </GaleryStyle>
    );
};

export default withTranslation("home")(Galery);
