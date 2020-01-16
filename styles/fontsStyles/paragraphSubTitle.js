import styled from 'styled-components';


const paragraphSubTitle = styled.h2`
    font-family: "GT–Medium";
    color: ${props => (props.color ? props.color : 'black')};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => (props.size ? props.size : '33px')};
    line-height: 38px;
    letter-spacing:0.8px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    margin-bottom:20px;
    @media only screen and (min-width:415px) and (max-width:768px){

    }
    @media only screen and (min-width:769px) {
        font-size: ${props => (props.size ? props.size : '56px')};
        line-height: 60px;
        letter-spacing: -0.01em;
    }


`;

export default paragraphSubTitle;
