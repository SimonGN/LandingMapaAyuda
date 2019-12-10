import styled from 'styled-components';


const WeStyle = styled.div`
width:90%;
margin: 25% auto;
display: flex;
flex-flow:column;
align-items: center;

    .img{
        width:100%;
        height: 20vh;
        background-image: url(/static/svg/iconOlas.svg);
        background-repeat: no-repeat;
        position: relative;
        margin-bottom:20%;
        display:flex;
        object-fit: cover;
    }
    .icon{
        position: relative;
        left: 37%;
        top: 73%;
    }
    .iconWord{
        position: relative;
        width:50%;
        left: 72%;
        top: 80%;
    }
    .iconTicket{
        position: absolute;
        width: 30%;
        top: -19%;
        left: 42%;
    }
    .text{
        width:100%;
        text-align: left;

    }
    .title, .subTitle{
        margin-bottom:4%;
    }
    .paragraph{
        margin-bottom:10%;
    }


    @media only screen and (min-width:415px) and (max-width:768px){
        margin: 15% auto;  
        flex-flow:row;
        .img{ 
            width:45%;
            height: 50vh;
            margin-bottom:0%;
        }
        .text{
            width:45%;
            margin: 0 auto;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin: 0 auto; 
        flex-flow:row;
        .img{ 
            width:45%;
            height: 55vh;
            margin-bottom:0%;
        }
        .text{
            width:45%;
            margin: 0 auto;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin: 0 auto; 
        margin-bottom: 10%;  
        width:80%;
        flex-flow:row;
        .img{ 
            width:50%;
            height: 60vh;
            margin-bottom:0%;
        }
        .text{
            width:35%;
            margin: 0 auto;
        }
        .icon{
            left: 35%;
            top: 33%;
        }
        .iconWord{
            width:80%;
        }
        .iconTicket{
            top: 21%;
        }
    }
    @media only screen and (min-width:1441px){
        margin: 0 auto; 
        margin-bottom: 10%;  
        width:60%;
        flex-flow:row;
        .img{ 
            width:50%;
            height: 65vh;
            margin-bottom:0%;
        }
        .text{
            width:35%;
            margin: 0 auto;
        }
        .icon{
            left: 40%;
            top: 33%;
        }
        .iconWord{
            width:90%;
        }
        .iconTicket{
            top: 18%;
            left: 28%;
            width:45%;
        }
    }

`;

export { WeStyle };
