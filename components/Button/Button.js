import React from "react";

import { ButtonStyle } from "./ButtonStyle";

const Button = props => {
    return (
        <ButtonStyle 
            backgroundColor={props.backgroundColor}
            color={props.color} 
            size={props.size}
            light={props.light}
            width = {props.width}
            onClick={props.method ? props.method : undefined}
            type={props.type? props.type : "button"}
        >
            {props.children}
        </ButtonStyle>
    );
};

export default Button;