import styled from 'styled-components';


const ParagraphTitle = styled.h2`
    font-family: "GT–Medium";
    color: ${props => (props.color ? props.color : 'black')};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => (props.size ? props.size : '35px')};
    line-height: 40px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }
`;

export default ParagraphTitle;
