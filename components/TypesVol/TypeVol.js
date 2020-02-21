import React from "react";
import { TypeVolStyle } from "./TypeVolStyle";
import ParagraphSubTitle from "../../styles/fontsStyles/ParagraphSubTitle";

import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import typeVol from "../../content/typeVol.json";
import { withTheme } from 'styled-components'
import { withTranslation } from '../../i18n'

const TypeVol = ({t, theme}) => {
    const displayCardType =() => {
        return(
            typeVol.map((card, i) => {
                const { type, photo} = card;
                return(
                    <CardCountry key={i} type={type} photo={photo}/>
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
                <Button backgroundColor="#D2E4F9" color={theme.colors.indigo}>
                    {t("button4")}
                </Button>
            </div>

        </TypeVolStyle>
    );
};

export default withTranslation("home")(withTheme(TypeVol));
