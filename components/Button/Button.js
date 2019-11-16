import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import ParagraphMedium from "../../styles/fontsStyles/paragraphMedium";

const Button = props => {


    return (
        <ButtonStyle 
        backgroundColor={props.backgroundColor}
         >
            <ParagraphMedium color={props.color}> {props.content}</ParagraphMedium>
          
        </ButtonStyle>
    );
};

export default Button;
