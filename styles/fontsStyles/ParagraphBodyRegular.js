import styled from 'styled-components';


const ParagraphBodyRegular = styled.p`
    font-family: "PanaGT–Regular";
    color: ${props => (props.color ? props.color : '#999999')};
    font-size: ${props => (props.size ? props.size : '16px')};
    line-height: 24px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    letter-spacing: 0.6px;
    

    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }
`;

export default ParagraphBodyRegular;
