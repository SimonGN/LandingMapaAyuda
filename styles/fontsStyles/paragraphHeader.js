import styled from 'styled-components';


const paragraphHeader = styled.p`
    font-family: "PanaGT–Regular";
    color: ${props => (props.color ? props.color : '#000000')};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => (props.size ? props.size : '20px')};
    line-height: 24px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    letter-spacing: -0.01em;
    margin-bottom:15px;
    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: ${props => (props.size ? props.size : '32px')};
        line-height: 40px;

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: ${props => (props.size ? props.size : '32px')};
        line-height: 40px;

    }
    @media only screen and (min-width:1441px){
        font-size: ${props => (props.size ? props.size : '32px')};
        line-height: 40px;

    }
`;

export default paragraphHeader;
