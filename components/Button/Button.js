import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import ParagraphBody from "../../styles/fontsStyles/ParagraphBody";

const Button = props => {


    return (
        <ButtonStyle 
        backgroundColor={props.backgroundColor}
        className="readmore"
        onClick={props.method ? props.method : ''}
         >
            <ParagraphBody color={props.color} size={props.size}> {props.content}</ParagraphBody>
          
        </ButtonStyle>
    );
};

export default Button;
