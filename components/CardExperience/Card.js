import React, { useState } from "react";
import Link from "next/link";

import { CardStyle } from "./CardStyle"
import Button from "../Button/Button";

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}
const CardExperience = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)

    const displayCards = () => {
        return (
            cardExperience.map((card, i) => {
                const { description, conutry, photo, people } = card;
                return (
                    <div className="cardStyle">
                        <div className="img">
                            <div className="imgFondo">
                                {/* <img src={photo}></img> */}
                            </div>
                            <div className="imgPeople" >
                                {/* <img src={people}></img> */}
                            </div>
                        </div>
                        <ParagraphBody className="country" color="#999999">{conutry}</ParagraphBody>
                        <div className="text">
                            <ParagraphBody className="description">{description}</ParagraphBody>
                            <Button content={t("button1")} color="#F1A409" backgroundColor="#FCEDCE"/>
                        </div>
                    </div>
                    

                )
            })
        )
    }
    return (
        <CardExperienceStyle>
            {displayCards()}
        </CardExperienceStyle>
    );
};

export default withTranslation("home")(CardExperience);
