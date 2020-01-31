import styled from 'styled-components';


const CommingSoonStyle = styled.div`
margin: 0 auto;
width:90vw;
height:95vh;
padding-top:20px;
overflow-x:scroll;
overflow-y:hidden;

    .green{
        background-color:#8ED7BF;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height:70vh;
        display: flex;
        flex-flow:column;
        justify-content:center;
        align-items:center;
    }

    .greenOpacity{
        background-color:#8ED7BF40;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        width:100%;
        height:100%;
        margin: 0 auto;
        position:relative;
    }
    .logo, .iconWord{
        margin: 0 auto;
        img{
            width:100%;
            margin: 0 auto; 
        }
    }
    .logo{
        width:230px;
    }
    .links{
        margin: 0 auto;
        width:200px;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .iconRrss{
        width:30px;
        height:30px;
    }

    .iconWord{
        position: absolute;
        width: 30%;
        text-align: center;
        top: -7%;
        left: 36%;
    }
    .textGreen{
        margin-top:30px;
        margin-bottom:30px;
    }
    .textGreenOpacity{
        width:90%;
        padding-top: 35%;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        justify-content: space-evenly;
    }
    

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .greenOpacity{
            height:27%;
        }
        .iconWord{
            width: 20%;
            top:-29%;
            left: 40%;
        }
        .textGreen{
            width: 400px;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:95vw;
        padding-top:20px;
        padding-bottom:20px;
        .greenOpacity{
            height: 26%;
        }
        .iconWord{
            width: 100px;
            top: -23%;
            left: 45%;
        }
        .textGreen{
            width: 310px;
        }
        
    }
    @media only screen and (min-width:1025px) {
        width:97vw;
        height:98vh;
        padding-top:20px;
        .greenOpacity{
            height: 26%;
        }
        .iconWord{
            width: 120px;
            top: -21%;
            left: 46%;
        }
        .textGreen{
            width: 500px;
            margin-top:50px;
        }
        .subTitle{
            margin-top:20px;
            width: 350px;
            margin: 0 auto;
        }
    }

`;

export { CommingSoonStyle };
