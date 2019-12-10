import styled from 'styled-components';


const ParagraphBodySmall = styled.p`
    font-family: "PanaGT–Regular";
    color: ${props => (props.color ? props.color : '#666666')};
    font-size: ${props => (props.size ? props.size : '12px')};
    line-height: ${props => (props.height ? props.height : '12px')};
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

export default ParagraphBodySmall;
