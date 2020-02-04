import React, { useState } from "react";
import Link from "next/link";


import { TypeVolStyle } from "./TypeVolStyle";
import ParagraphSubTitle from "../../styles/fontsStyles/ParagraphSubTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/ParagraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/ParagraphBodySmall";


import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import typeVol from "../../content/typeVol.json";

import { withTranslation } from '../../i18n'

const TypeVol = ({t}) => {
    const displayCardType =() => {
        return(
            typeVol.map((card, i) => {
                const { type, photo} = card;
                return(
                    <Link href=""key={i}><CardCountry type={type} photo={photo}/></Link>
                )
            })
        )
    }

    
    return (
        <TypeVolStyle >
            <div className="textAll">
                <div className="text">
                    <ParagraphSubTitle>{t("intro2")}</ParagraphSubTitle>
                </div>
            </div>
            <div className="card">
                {displayCardType()}
            </div>
            <div className="button">
                <Link href=""><Button content={t("button4")} backgroundColor="#D2E4F9" color="#1C76E3" /></Link>
            </div>


        </TypeVolStyle>
    );
};

export default withTranslation("home")(TypeVol);
