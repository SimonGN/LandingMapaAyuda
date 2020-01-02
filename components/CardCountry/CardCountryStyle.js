import styled from 'styled-components';


const CardCountryStyle = styled.div`
    margin-bottom:5%;
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
        white-space: normal;
        width:100%;
        padding-left:1%;
        padding-top:2%;
    }
    .country{
        margin-top:8px;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        width: 33%;

    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width: 22.5%;
        margin-left:0%;
        margin-bottom:2.5%;
        margin-left:0%;
        .button{
            margin-bottom: 15%;
        }
    }
    @media only screen and (min-width:1025px){
        width: 23%;
        margin-left:0%;
        margin-bottom:2%;
        margin-left:0%;
    }

`;

export { CardCountryStyle };
