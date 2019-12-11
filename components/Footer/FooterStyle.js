import styled from 'styled-components';


const FooterStyle = styled.div`
margin: 0 auto;
width:95vw;
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
        height:370px;
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
        margin: 0 auto;
        margin-left: 7%;
        margin-right: 7%;
       
    }
    .greenOpacity{
        background-color:#8ED7BF40;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        width:95vw;
        height:auto;
        margin: 0 auto;
        position:relative;
    }
    .iconWord{
        position: absolute;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        top: -9%;
        left: -40%;
        img{
            width:50%;
            margin: 0 auto; 
        }
    }
    .textGreenOpacity{
        width:90%;
        padding-top:15%;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        justify-content: space-evenly;

    }
    .nameText{
        width: 100%;
    }
    .navSeo{
        width:80%;
        margin:0 auto;
    }
    .idioms, .idiomsMovil{
        order: 1;
        display:flex;
        width:50%;
        margin: 0 auto;
        justify-content: space-between; 
        margin-bottom:20%;
    }
    .idioms{
        display:none;
    }
    Link{
        text-align:center;
    }
    .legal{
        width:95%;
        margin:0 auto;
        margin-bottom:10%;
        & > p{
            text-align:center;
            margin-bottom:5%;
        }
    }
    .sectionLegal{
        width:100%;
        display:flex;
        justify-content: space-between; 
    }
    
    .navegation, .voluntary, .moreInfo{
        margin-bottom:20%;
        & > p{
            margin-bottom: 12px;
        } 
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .green{
            height:460px;
        }
        .iconWord{
            top: -5%;
            left: 0;
                img{
                    width:10%;
            }
        }
        .navSeo{
            width:85%;
        }
        .idiomsMovil{
            width:30%;
        }
        .iconWord{
            img{
                width:18%;
            }
        }
        .textGreenOpacity{
            padding-top: 18%;
        }
        .legal{
            margin-bottom:5%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        padding-bottom: 3%;
        .green{
            height: 450px;
        }
       .button{
            margin: 0 auto;
       }
       .iconWord{
            top: -13%;
            left: -40%;
                img{
                    width:10%;
            }
        }
        .textGreenOpacity{
            padding-top: 100px;
            display: flex;
            flex-direction: row-reverse;
        }
        .idiomsMovil{
            display:none;
        }
        .idioms{
            display:block;
        }
        .navSeo{
            display:flex;
            justify-content:space-between;
            width:75%; 
        }
        .nameText{
            width:25%;
            flex-direction: column;
        }
        .idioms{
            display:flex;
            width:70%;
            margin: 0;
            margin-bottom: 28%;
            margin-top: 3%;
        }
        .legal{
            margin:0;
            & > p{
                text-align:left;
                margin-bottom: 16%;
            }
        }
        .sectionLegal{
            display:flex;
            flex-direction:column;
            & >p{
                margin-bottom: 15px;
            }

        }
        .navegation{
            margin-bottom: 10%;
            & >p{
                margin-bottom: 12px;
            }
        }
        .navegation, .voluntary, .moreInfo{
            margin-bottom: 10%;
        }
    }
    
    @media only screen and (min-width:1025px) and (max-width:1440px){
        padding-bottom: 2%;
        .green{
            height: 480px;
        }
        .button{
            margin: 0 auto;
        }
       .iconWord{
            top: -19%;
            left: -33%;
                img{
                    width:10%;
                }
        }
        .textGreenOpacity{
            width: 75%;
            padding-top: 100px;
            display: flex;
            flex-direction: row-reverse;
        }
        .idiomsMovil{
            display:none;
        }
        .navSeo{
            display:flex;
            justify-content:space-between;
            width:75%; 
        }
        .nameText{
            width:25%;
            flex-direction: column;
        }
        .idioms{
            display:flex;
            width:70%;
            margin: 0;
            margin-bottom: 24%;
            margin-top: 3%;
        }
        .legal{
            margin:0;
            & > p{
                text-align:left;
                margin-bottom: 16%;
            }
        }
        .sectionLegal{
            display:flex;
            flex-direction:column;
            & >p{
                margin-bottom: 15px;
            }

        }
        .navegation{
            margin-bottom: 10%;
            & >p{
                margin-bottom: 12px;
            }
        }
        .navegation, .voluntary, .moreInfo{
            margin-bottom: 10%;
        }
    }
    
    @media only screen and (min-width:1441px){
        padding-bottom: 2%;
        .green{
            height: 480px;
        }
        .button{
            margin: 0 auto;
        }
       .iconWord{
            top: -16%;
            left: -34%;
                img{
                    width:7%;
                }
        }
        .textGreenOpacity{
            width: 75%;
            padding-top: 100px;
            display: flex;
            flex-direction: row-reverse;
        }
        .textGreen{
            p{
                margin-top: 5%;
                margin-bottom: 5%;
            }
        }
        .idiomsMovil{
            display:none;
        }
        .navSeo{
            display:flex;
            justify-content:space-between;
            width:75%; 
        }
        .nameText{
            width:25%;
            flex-direction: column;
        }
        .idioms{
            display:flex;
            width:40%;
            margin: 0;
            margin-bottom: 17%;
            margin-top: 3%;
        }
        .legal{
            margin:0;
            & > p{
                text-align:left;
                margin-bottom: 12%;
            }
        }
        .sectionLegal{
            display:flex;
            flex-direction:column;
            & >p{
                margin-bottom: 15px;
            }

        }
        .navegation{
            margin-bottom: 10%;
            & >p{
                margin-bottom: 12px;
            }
        }
        .navegation, .voluntary, .moreInfo{
            margin-bottom: 10%;
        }
    }
    

`;

export { FooterStyle };
