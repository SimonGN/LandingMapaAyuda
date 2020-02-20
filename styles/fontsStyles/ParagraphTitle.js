import styled from 'styled-components';


const ParagraphTitle = styled.h2`
    font-family: "GT–Medium";
    color: ${props => (props.color ? props.color : props.theme.colors.dark100)};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => (props.size ? props.size : '37px')};
    line-height: 35px;
    letter-spacing:0.8px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    margin-bottom:20px;
    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: ${props => (props.size ? props.size : '68px')};
        line-height: 68px;
        letter-spacing: -0.01em;
    }
    @media only screen and (min-width:1441px){
        font-size: ${props => (props.size ? props.size : '68px')};
        line-height: 68px;
        letter-spacing: -0.01em;

    }
`;

export default ParagraphTitle;
