import styled from 'styled-components';


const CardExperienceStyle = styled.div`
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 2px 12px #00000020;
    width: 65%;
    height: 50%;
    .img{
        padding-top:7px;
        margin: 0 auto;
        position: relative;
    }
    .imgFondo{
        background-image: url("/static/img/map.jpg");
        width:90%;
        height:112px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position: absolute;
        background-image: url("/static/img/map.jpg");
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
