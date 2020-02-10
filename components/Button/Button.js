import React from "react";

import { ButtonStyle } from "./ButtonStyle";
import ParagraphBody from "../../styles/fontsStyles/ParagraphBody";

const Button = props => {


    return (
        <ButtonStyle 
            backgroundColor={props.backgroundColor}
            color={props.color} 
            size={props.size}
            onClick={props.method ? props.method : undefined}
        >
            {props.children}
        </ButtonStyle>
    );
};

export default Button;
