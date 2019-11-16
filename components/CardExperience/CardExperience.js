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
                        <div className="img">
                            <div className="imgFondo">
                                {/* <img src={photo}></img> */}
                            </div>
                            <div className="imgPeople">
                                {/* <img src={people}></img> */}
                            </div>
                        </div>
                        <ParagraphBody className="country" color="#999999">{conutry}</ParagraphBody>
                        <div className="text">
                            <ParagraphBody className="description">{description}</ParagraphBody>
                            <div className="button">{t("button1")}</div>
                        </div>
                    </div>
                    

                )
            })
        )
    }
    return (
        <CardExperienceStyle>
            {card(
                
            )}
        </CardExperienceStyle>
    );
};

export default withTranslation("home")(CardExperience);
