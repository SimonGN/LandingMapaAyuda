import styled from 'styled-components';


const CardExperienceStyle = styled.div`
    
    height: 40%;
    display: flex;
    /* width: 30em; */
    overflow-y: hidden;
    overflow-x: auto;
    margin-left: 73%;
    position: absolute;
    top: 45%;
    div:first-child{
        margin-left:10%;
    }
    .cardStyle{
        width: 330px;
        height: 295px;
        margin-right: 1.5%;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
        
    }
    .img{
        padding-top:7px;
        margin: 0 auto;
        position: relative;
    }
    .imgFondo{
        background-image: url("photo");
        width:90%;
        height:112px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position: absolute;
        background-image: url("people");
        width:40px;
        height:40px;
        border-radius: 12px;
        border: 5px solid white;
        left: 143px;
        top: 95px;
    }
    .place{
        display:flex;
    }
    .text{
        padding: 5% 7%;
        p:first-child{
            margin-bottom:3%;

        }
    }
    .button{
        padding:14px 15px;
        display: inline-block;  
        color: #F1A409;  
        background-color: #FCEDCE;
        border-radius: 8px;
        font-family: "GT–Medium";
        line-height: 24px;
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
