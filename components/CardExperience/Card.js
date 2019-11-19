import React, { useState } from "react";
import Link from "next/link";

import { CardStyle } from "./CardStyle";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import Button from "../Button/Button";

import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
    i18n.changeLanguage(language)
    setLangauge(language)
}

const Card = ({country, description, photo, people, t}) => {
    const [language, setLangauge] = useState(i18n.language)
    
    return (
        <CardStyle photo={photo} people={people}>
            <div className="cardStyle" >
                <div className="img">
                    <div className="imgFondo"></div>
                    <div className="imgPeople" ></div>
                </div>
                <ParagraphBody className="country" color="#999999">{country}</ParagraphBody>
                <div className="text">
                    <ParagraphBody className="description">{description}</ParagraphBody>
                    <Button content={t("button1")} color="#F1A409" backgroundColor="#FCEDCE" />
                </div>
            </div>
        </CardStyle>
    );
};

export default withTranslation("home") (Card);
