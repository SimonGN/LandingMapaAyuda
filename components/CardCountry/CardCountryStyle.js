import styled from 'styled-components';


const CardCountryStyle = styled.div`
    margin-bottom:10%;
    flex: none;
    width:62%;
    margin-left:5%;
    cursor: pointer;
    img{
        background-color: ${props => (props.photo ? '' : '#fffff')};
        border-radius:16px;
        width: 100%;
    }
    .text{
        white-space: nowrap;
        width:100%;
        padding-left:5%;
        padding-top:1%;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        width: 33%;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width: 22.5%;
        margin-left:0%;
        margin-bottom:2.5%;
        margin-left:0%;
        .text{
            width:100%;
            padding-left:5%;
            padding-top:1%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width: 23%;
        margin-left:0%;
        margin-bottom:2%;
        margin-left:0%;
        .text{
            width:100%;
            padding-left:5%;
            padding-top:1%;
        }
    }
    @media only screen and (min-width:1441px){
        width: 23%;
        margin-left:0%;
        margin-bottom:2%;
        margin-left:0%;
        .text{
            width:100%;
            padding-left:5%;
            padding-top:1%;
        }
    }

`;

export { CardCountryStyle };
