import styled from 'styled-components';


const CardExperienceStyle = styled.div`
  
    overflow-x: scroll;
    display:flex;
    padding-bottom: 2%;
    .cardStyle{
        position: relative;
        margin-right: 5%;
        width: 230px;
        height: 290px;
        padding: 15px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
        flex-grow:1;
        flex: none;
    }
    .img{
        position:relative;
    }
    .imgFondo{
        margin-top: 2%;
        background-image: url("prop.photo");
        background-color:blue;
        width:100%;
        height:140px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position:absolute;
        background-image: url("people");
        background-color:red;
        width:40px;
        height:40px;
        border-radius: 12px;
        border: 5px solid white;
        left: 70%;
        top: 85%;
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
