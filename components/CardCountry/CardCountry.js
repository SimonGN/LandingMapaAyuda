import React, { useState } from "react";
import Link from "next/link";

import { CardCountryStyle } from "./CardCountryStyle";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";

import { i18n, withTranslation } from '../../i18n'


const CardCountry = ({ country, photo, t }) => {

    return (
        <CardCountryStyle photo={photo} country={country}>
            <div className="imgs">
                <img src={photo}/>
            </div>      
            <div className="text">
                <ParagraphBody className="description">{country}</ParagraphBody>
                <ParagraphBodySmall className="country" color="#1C76E3"> XX {t("card")}</ParagraphBodySmall>
            </div>
        </CardCountryStyle>
    );
};

export default withTranslation("home")(CardCountry);
