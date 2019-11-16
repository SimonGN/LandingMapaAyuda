import React, { useState } from "react";
import Link from "next/link";

import { CardExperienceStyle } from "./CardExperienceStyle";

import ParagraphBody from "../../styles/fontsStyles/paragraphBody";

import Button from "../Button/Button";
import cardExperience from "../../content/card.json";

import { i18n, withTranslation } from '../../i18n'



const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}
const CardExperience = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    
    const card = () => {
        return (
            cardExperience.map((member, i) => {
                const { description, conutry, photo, people } = member;
                return (
                    <div className="cardStyle">
                        <div className="card-experience" key={i}>
                            <div className="img">
                                <div className="imgFondo">
                                {/* <img src={photo}></img> */}
                                </div>
                                <div className="imgPeople">
                                {/* <img src={people}></img> */}
                                </div>
                            </div>
                            <div className="text">
                                <ParagraphBody color="#999999">{conutry}</ParagraphBody>
                                <ParagraphBody>{description}</ParagraphBody>
                            </div>
                        </div>
                        <div className="button">{t("button1")}</div>
                        
                    </div>
                )
            })
        )
    }
    return (
        <CardExperienceStyle>
            {card()}
        </CardExperienceStyle>
    );
};

export default withTranslation("home")(CardExperience);
