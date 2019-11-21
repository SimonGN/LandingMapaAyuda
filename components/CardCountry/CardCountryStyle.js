import styled from 'styled-components';


const CardCountryStyle = styled.div`
    margin-bottom:10%;
    flex: none;
    width:62%;
    margin-left:5%;

    img{
        background-color: ${props => (props.photo ? '' : '#fffff')};
        border-radius:16px;
        width: 100%;
    }
    .text{
        width:80%;
        padding-left:5%;
        padding-top:1%;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
  
    }
    @media only screen and (min-width:1441px){
     
    }

`;

export { CardCountryStyle };
