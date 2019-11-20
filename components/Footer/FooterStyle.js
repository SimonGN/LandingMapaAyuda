import styled from 'styled-components';


const FooterStyle = styled.div`
margin: 0 auto;
width:90vw;
padding-bottom:5%;
    .icon{
        display:none;
    }
    .green{
        background-color:#8ED7BF;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height:312px;
        flex-flow:column;
        justify-content:center;
        display: ${props => (props.display ? props.display : 'none')};
    }
    .textGreen{
        margin:0 20%;
        text-align:center;
        p{
            margin-top:8%;
            margin-bottom:8%;
        }
    }
    .button{
        margin-left: 7%;
        margin-right: 7%;
    }
    .greenOpacity{
        background-color:#8ED7BF40;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        width:90vw;
        height:216px;
        margin: 0 auto;
    }
    .iconWord{
        width: 90%;
        margin: 0 auto;
        text-align: center;
        img{
            width:30%;
            margin: 0 auto; 
            margin-top: -7%; 
        }
    }
    .textGreenOpacity{
        width:90%;
        height:65%;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        align-items: center;
        justify-content: space-evenly;
    }
    .idioms, .legal{ 
        display:flex;
    }
    .idioms{
        width: 40%;
        justify-content: space-between; 
    }
    .legal{
        width: 100%;
        justify-content: space-between;
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

export { FooterStyle };
