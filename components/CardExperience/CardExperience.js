import React, { useState } from "react";
import Link from "next/link";

import { CardExperienceStyle } from "./CardExperienceStyle";

import ParagraphBody from "../../styles/fontsStyles/paragraphBody";

import Button from "../Button/Button";


import { i18n, withTranslation } from '../../i18n'


const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}
const CardExperience = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    return (
        <CardExperienceStyle>
            <div className="img">
             <div className="imgFondo"></div>
             <div className="imgPeople"></div>
            </div>
            <div>
                <div className="text">            
                    <ParagraphBody color="#999999">Lima, Perú</ParagraphBody>                
                    <ParagraphBody>La maravillosa gente que conocí en Sidney</ParagraphBody>
                </div>
                <Button content={t("button1")} color="#F1A409" backgroundColor="#FCEDCE" size="14px"/>
            </div>


            
        </CardExperienceStyle>
    );
};

export default withTranslation("home")(CardExperience);
