import React from "react";

import { CardStyle } from "./CardStyle";
import ParagraphBody from "../../styles/fontsStyles/ParagraphBody";
import ParagraphBodySmall from "../../styles/fontsStyles/ParagraphBodySmall";

import Button from "../Button/Button";

import { withTranslation } from '../../i18n'



const Card = ({ country, description, photo, people, number, t }) => {

    return (
        <CardStyle photo={photo} people={people} number={number%2}>

            <div className="cardStyle" >
                <div className="img">
                    <div className="imgFondo"></div>
                    <div className="imgPeople" ></div>
                </div>
                <div className="text">
                    <ParagraphBodySmall className="country" color="#999999">{country}</ParagraphBodySmall>
                    <ParagraphBody className="description">{description}</ParagraphBody>
                    <div className="button">
                        <Button color="#F1A409" backgroundColor="#FCEDCE">
                        {t("button1")}
                        </Button>
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};

export default withTranslation("home")(Card);
