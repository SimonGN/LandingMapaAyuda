import React, { useState } from "react";
import Link from "next/link";

import {CardAllStyle} from "./CardAllStyle"
import Card from "./Card";
import cardExperience from "../../content/card.json";



const CardAll = props => {
    const displayCards = () => {
        return (
            cardExperience.map((card, i ) => {
                const { description, country, photo, people, buttonContent } = card;
                return (
                    <Card description={description} country={country} buttonContent={buttonContent} photo={photo} people={people} key={i}/>
                )
            })
        )
    }
    return (
        <CardAllStyle >
            <div className="card">
                {displayCards()}
            </div>
            
            <div className="icon">
                <img className="icon1" src="/static/svg/iconHomeGalery0.svg" />
                <img className="icon2" src="/static/svg/iconHomeGalery1.svg" />
                <img className="icon3" src="/static/svg/iconHomeGalery2.svg" />
                <img className="icon4" src="/static/svg/iconHomeGalery3.svg" />
                <img className="icon5" src="/static/svg/iconHomeGalery4.svg" />
            </div>
        </CardAllStyle>
    );
};

export default (CardAll);
