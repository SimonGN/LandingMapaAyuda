import React, { useState } from "react";
import Link from "next/link";

import { GalleryStyle } from "./GalleryStyle";
import Button from "../Button/Button";



import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphHeader from "../../styles/fontsStyles/paragraphHeader"


import { i18n, withTranslation } from '../../i18n'

const Gallery = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    return (
        <GalleryStyle>
            <ParagraphTitle className="description">{t("galeryIntro")}</ParagraphTitle>
            <div>
                <div className="galleryImg">
                   <img src="/static/svg/iconFavo.svg" />

                </div>
                <div>
                    <ParagraphHeader color="#F1A409">{t("description3")}</ParagraphHeader>
                    <ParagraphBodyRegular>{t("description3")}</ParagraphBodyRegular>
                    <ParagraphBodyRegular>{t("description3")}</ParagraphBodyRegular>
                    <div className="button">
                        <Link href="/"><Button content={t("button1")} backgroundColor="#FCEDCE" color="#F1A409" /></Link>
                    </div>
                    <div className="nextBack">
                        <div className="buttonNextBack">
                            <ParagraphBodyRegular>Atrás</ParagraphBodyRegular>
                            <ParagraphBodyRegular>·</ParagraphBodyRegular>
                            <ParagraphBodyRegular>Siguiente</ParagraphBodyRegular>
                        </div>
                        <div className="buttonDiv">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </GalleryStyle>
    );
};

export default withTranslation("home")(Gallery);
