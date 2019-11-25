import React, { useState } from "react";
import Link from "next/link";

import { GaleryStyle } from "./GaleryStyle";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";

const Galery = props => {


    return (
        <GaleryStyle >
            <ParagraphBody color={props.color} size={props.size}> {props.content}</ParagraphBody>
          
        </GaleryStyle>
    );
};

export default Galery;
