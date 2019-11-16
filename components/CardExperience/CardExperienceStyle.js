import styled from 'styled-components';


const CardExperienceStyle = styled.div`
    width: -webkit-fill-available;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    display:flex;
    box-shadow: 0px 2px 12px #00000020;
    .cardStyle{
        position: relative;
        margin-right: 1%;
        width: 230px;
        height: 290px;
        padding: 15px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
    }
    .imgFondo{
        margin-top: 2%;
        background-image: url("photo");
        background-color:blue;
        width:100%;
        height:140px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position: absolute;
        background-image: url("people");
        background-color:red;
        width:40px;
        height:40px;
        border-radius: 12px;
        border: 5px solid white;
        left: 65%;
        top: 40%;
    }
    .button{
        padding:14px 15px;
        display: inline-block;  
        color: #F1A409;  
        background-color: #FCEDCE;
        border-radius: 8px;
        font-family: "GT–Medium";
        line-height: 24px;
        cursor: pointer;
    }
    .country{
        padding:5% 0 3%;
    }
    .text{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .description{
        padding:0 0 5%;
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

export { CardExperienceStyle };
