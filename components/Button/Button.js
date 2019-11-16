import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import ParagraphMedium from "../../styles/fontsStyles/paragraphMedium";

const Button = props => {


    return (
        <ButtonStyle >
          {props.content}
        </ButtonStyle>
    );
};

export default Button;
