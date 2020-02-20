import React from "react";
import Link from "next/link";


import { OpportunityStyle } from "./OpportunityStyle";
import ParagraphSubTitle from "../../styles/fontsStyles/ParagraphSubTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/ParagraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/ParagraphBodySmall";


import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import cardCountry from "../../content/cardCountry.json";
import countrys from "../../content/countrys.json"

import {withTranslation } from '../../i18n'
import { withTheme } from 'styled-components'
import Dropdown from 'react-dropdown'

const Opportunity = ({ country, photo, t, theme }) => {
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
                    <ParagraphSubTitle>{t("intro3")}</ParagraphSubTitle>
                    <ParagraphBodyRegular className="ptext">{t("description3")}</ParagraphBodyRegular>
                </div>
                <div className="filter">
                    <ParagraphBodySmall size="16px" color={theme.colors.dark40}>{t("desplegable")}</ParagraphBodySmall>
                    <div className="dropDown">
                        <ParagraphBodySmall size="16px"color={theme.colors.turquoise}><Dropdown options={optionCountry()}  placeholder={t("desplegable2")} /> <img src="/static/svg/iconDropDown.svg" /></ParagraphBodySmall>
                    </div> 
                </div>
            </div>
            <div className="card">
            {displayCardCountry()}
            </div>
            <div className="button">
                <Link href="">
                    <Button backgroundColor="#D2E4F9" color={theme.colors.indigo}>
                        {t("button4")}
                    </Button>
                </Link>
            </div>


        </OpportunityStyle>
    );
};

export default withTranslation("home")(withTheme(Opportunity));
