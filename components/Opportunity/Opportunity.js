import React, { useState } from "react";
import Link from "next/link";


import { OpportunityStyle } from "./OpportunityStyle";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";


import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import cardCountry from "../../content/cardCountry.json";
import countrys from "../../content/countrys.json"

import { i18n, withTranslation } from '../../i18n'
import Dropdown from 'react-dropdown'

const Opportunity = ({ country, photo, t }) => {
    const displayCardCountry =() => {
        return(
            cardCountry.map((card, i) => {
                const { country, photo} = card;
                return(
                    <Link href=""key={i}><CardCountry photo={photo} country={country} /></Link>
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
        <OpportunityStyle photo={photo} country={country}>
            <div className="textAll">
                <div className="text">
                    <ParagraphTitle>{t("intro3")}</ParagraphTitle>
                    <ParagraphBodyRegular className="ptext">{t("description3")}</ParagraphBodyRegular>
                </div>
                <div className="filter">
                    <ParagraphBodySmall size="16px" color="#999999">{t("desplegable")}</ParagraphBodySmall>
                    <div className="dropDown">
                        <ParagraphBodySmall size="16px"color="#54C39F"><Dropdown options={optionCountry()}  placeholder={t("desplegable2")} /> <img src="/static/svg/iconDropDown.svg" /></ParagraphBodySmall>
                    </div> 
                </div>
            </div>
            <div className="card">
            {displayCardCountry()}
            </div>
            <div className="button">
                <Link href=""><Button content={t("button4")} backgroundColor="#D2E4F9" color="#1C76E3" /></Link>
            </div>


        </OpportunityStyle>
    );
};

export default withTranslation("home")(Opportunity);
