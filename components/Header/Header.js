import React, { useState } from "react";
import Link from "next/link";

import { HeaderStyle } from "./HeaderStyle";
import Button from "../Button/Button";


import ParagraphTitle from "../../styles/fontsStyles/ParagraphTitle";


import { i18n, withTranslation } from '../../i18n'
import Card from "../CardExperience/Card";
import cardExperience from "../../content/card.json";



const Header = props => {
    const { t } = props;
    const [language, setLangauge] = useState(i18n.language)
    const displayCards = () => {
        return (
            cardExperience.map((card, i ) => {
                const { description, country, photo, people, buttonContent } = card;
                return (
                    <Card description={description} country={country} buttonContent={buttonContent} photo={photo} people={people} key={i} number={i}/>
                )
            })
        )
    }
    return (
        <HeaderStyle>
            <main>
                <ParagraphTitle align="center">{t("intro")}</ParagraphTitle>
                <Button color="white">
                {t("button")}
                </Button>
            </main>
            <div className="cardContainer">
                {displayCards()}
            </div>
            <div className="icon">
                <img className="icon1" src="/static/svg/iconHomeGalery0.svg" />
                <img className="icon2" src="/static/svg/iconHomeGalery1.svg" />
                <img className="icon3" src="/static/svg/iconHomeGalery2.svg" />
                <img className="icon4" src="/static/svg/iconHomeGalery3.svg" />
                <img className="icon5" src="/static/svg/iconHomeGalery4.svg" />
            </div>
        </HeaderStyle>
    );
};

export default withTranslation("home")(Header);
