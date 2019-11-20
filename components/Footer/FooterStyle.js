import styled from 'styled-components';


const FooterStyle = styled.div`
margin: 0 auto;
width:90vw;
padding-bottom:5%;
    nav{
        display:none;
    }
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
        position:relative;
    }
    .iconWord{
        position:absolute;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        top: -20%;
        left: 7%;
        img{
            width:30%;
            margin: 0 auto; 
        }
    }
    .textGreenOpacity{
        width:90%;
        padding-top:25%;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        align-items: center;
        justify-content: space-evenly;

    }
    .nameText{
        width: 40%;
    }
    .cc{
        margin-bottom:30%;
    }
    .navLegal{
        width:95%;
    }
    .idioms, .legal{ 
        display:flex;
    }
    .idioms{
        justify-content: space-between; 
        margin-bottom:30%;
    }
    .legal{
        justify-content: space-between;
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .textGreenOpacity{
            height:75%;
            padding-top:7%;
        }
        .cc{
            margin-bottom: 15%;
        }
        .iconWord{
            width: 39%;
            left: 31%;
        }
        .idioms{
            width: 60%;
            margin:0 auto;
            margin-bottom:10%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        nav{
            cursor: pointer;
            position:relative;
            width: 57%;
            height:15%;
            display:flex;
            justify-content:space-between;
            align-items: center;
            Link:last-child{
                width:20%;
            }
        }
        button{
            padding: 2.5% 4%;
            font-size:16px;
        }
        .green{
            position:relative;
            height:312px;
            text-align:center;
        }
        .icon{
            display:block;
            position:absolute;
            text-align: center;
            left: 75%;
            top: -15%;
            img{
                width:60%;
            }
        }
        .iconWord{   
            top: -40%;
            right: 0;
            left: -70%;
            img{
                width:10%;
                margin: 0 auto; 
            }
        }
        .greenOpacity{
            height:100%;
        }
        .textGreenOpacity{
            padding-top:7%;
            padding-bottom:3%;
            display: flex;
            flex-direction: row;
        }
        .nameText{
            display: flex;
            flex-direction: column;
        }

        .cc{
            order:3;
            margin-bottom: 0;
            
        }
        .idioms{
            margin: 0 auto;
            order:2;
            margin-bottom: 10%;
            width: 55%;
        }
        .legal{
            width: 45%;
        }
        .navLegal{
            order:4;
            text-align: -webkit-right;
        }
        .nameText{
            width:30%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .green{
            position:relative;
            height:412px;
            text-align:center;
        }
        .icon{
            display:block;
            position:absolute;
            text-align: center;
            left: 80%;
            top: -16%;
            img{
                width:85%;
            }
        }
        .textGreen{
            p{
                margin-top: 5%;
                margin-bottom: 8%;
            }
        }
        nav{
            cursor: pointer;
            position:relative;
            width: 57%;
            height:15%;
            display:flex;
            justify-content:space-between;
            align-items: center;
            Link:last-child{
                width:20%;
            }
        }
        button{
            padding: 2.5% 4%;
            font-size:16px;
        }
    }
    @media only screen and (min-width:1441px){
        .green{
            position:relative;
            height:512px;
            text-align:center;
        }
        .icon{
            
            display:block;
            position:absolute;
            text-align: center;
            left: 83%;
            top: -15%;
            img{
                width:90%;
            }
        }
        .textGreen{
            p{
                margin-top: 2%;
                margin-bottom: 4%;
            }
        }
        nav{
            cursor: pointer;
            position:relative;
            width:38%;
            height:15%;
            display:flex;
            justify-content:space-between;
            align-items: center;
            Link:last-child{
                width:20%;
            }
        }
        button{
            padding: 2.5% 4%;
            font-size:16px;
        }
    }

`;

export { FooterStyle };
