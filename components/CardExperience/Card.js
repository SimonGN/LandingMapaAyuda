import React, { useState } from "react";
import Link from "next/link";

import { CardStyle } from "./CardStyle";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";

import Button from "../Button/Button";

import { i18n, withTranslation } from '../../i18n'



const Card = ({country, description, photo, people, t}) => {
    
    return (
        <CardStyle photo={photo} people={people}>
            <div className="cardStyle" >
                <div className="img">
                    <div className="imgFondo"></div>
                    <div className="imgPeople" ></div>
                </div>
                <ParagraphBodySmall className="country" color="#999999">{country}</ParagraphBodySmall>
                <div className="text">
                    <ParagraphBody className="description">{description}</ParagraphBody>
                    <Button content={t("button1")} color="#F1A409" backgroundColor="#FCEDCE" />
                </div>
            </div>
        </CardStyle>
    );
};

export default withTranslation("home") (Card);
