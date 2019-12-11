import React, { useState } from "react";
import Link from "next/link";

import { GalleryStyle } from "./GalleryStyle";
import Button from "../Button/Button";



import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import galleryItems from '../../content/gallery.json';

import { i18n, withTranslation } from '../../i18n'

const Gallery = props => {
    const { t } = props;
    const [ tab, setTab ] = useState(0);
    const [ galleryItem, setGalleryItem ] = useState(galleryItems[0]);

    const changeItem = (number) => {
        setGalleryItem(galleryItems[number]);
    }

    const changeTab = (number) => {
        if(number >= 0 && number < 4) {
            setTab(number);
            changeItem(number);
        } 
        
    }

    const { photo, description, title } = galleryItem;
    return (
        <GalleryStyle photo={photo}>
            <ParagraphTitle className="description">{t("galeryIntro")}</ParagraphTitle>
            <div className="component">
                <div className="galleryImg">
                   <img src={"/static/svg/iconFavo.svg"} />
                </div>
                <div className="textImg"> 
                    <ParagraphTitle color="#F1A409">{title}</ParagraphTitle>
                    <ParagraphBodyRegular >{description}</ParagraphBodyRegular>
                    <div className="button">
                        <Link href="/"><Button content={t("button1")} backgroundColor="#FCEDCE" color="#F1A409" /></Link>
                    </div>
                    <div className="nextBack">
                        <div className="buttonNextBack">
                            <ParagraphBodyRegular color="#00000050" onClick={() => changeTab(tab-1)}>Atrás</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#00000050">·</ParagraphBodyRegular>
                            <ParagraphBodyRegular color="#00000050" onClick={() => changeTab(tab+1)}>Siguiente</ParagraphBodyRegular>
                        </div>
                        <div className="buttonDiv">
                            <div className={`${tab===0 && 'active' }`} onClick={() => changeTab(0)}></div>
                            <div className={`${tab===1 && 'active' }`} onClick={() => changeTab(1)}></div>
                            <div className={`${tab===2 && 'active' }`} onClick={() => changeTab(2)}></div>
                            <div className={`${tab===3 && 'active' }`} onClick={() => changeTab(3)}></div>
                        </div>
                    </div>
                </div>
            </div>

        </GalleryStyle>
    );
};

export default withTranslation("home")(Gallery);
