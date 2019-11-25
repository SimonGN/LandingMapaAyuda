import React, { useState } from "react";
import Link from "next/link";


import { TypeVolStyle } from "./TypeVolStyle";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";


import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import cardCountry from "../../content/cardCountry.json";
import countrys from "../../content/countrys.json"

import { i18n, withTranslation } from '../../i18n'
import Dropdown from 'react-dropdown'

const TypeVol = ({ country, photo, t }) => {
    const displayCardCountry =() => {
        return(
            cardCountry.map((card, i) => {
                const { country, photo} = card;
                return(
                    <Link href=""><CardCountry photo={photo} country={country}/></Link>
                )
            })
        )
    }
    const optionCountry =() =>{
        return(
            countrys.map((country) =>{
                return (country.name)
            })
        )
    }

    
    return (
        <TypeVolStyle photo={photo} country={country}>
            <div className="textAll">
                <div className="text">
                    <ParagraphTitle>{t("intro2")}</ParagraphTitle>
                    {/* <ParagraphBodyRegular>{t("description3")}</ParagraphBodyRegular> */}
                </div>
            </div>
            <div className="card">
            {displayCardCountry()}
            </div>
            <div className="button">
                <Link href=""><Button content={t("button4")} backgroundColor="#D2E4F9" color="#1C76E3" /></Link>
            </div>


        </TypeVolStyle>
    );
};

export default withTranslation("home")(TypeVol);
