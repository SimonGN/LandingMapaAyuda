import styled from 'styled-components';


const ContentStyle = styled.div`
    width:90%;
    margin:0 auto;
    margin-bottom:135%;
    position: relative;
    h2{
        width:70%;
        padding-left:10%;
        padding-top: 15%;
        padding-bottom: 10%;
    }
    .yellow, .opacityYellow{
        width:100%;
        border-radius: 16px;
    }
    .yellow{
        background-color:#F8DE6D;
        margin-bottom:3%;

        img{
            display:none;
        }
    }
    .opacityYellow{
        background-color:#FDF6D7;
        position:absolute;
        margin-bottom:20%;
        z-index:1;
    }
    .icons{
        position: absolute;
        top: -14%;
        left: 70%;
        img{
            width:80%;
        }
    }
    .iconPlant{
        position: absolute;
        display:none;
    }
    .button{
        padding-left:10%;
        padding-bottom: 10%;
        width:70%;
    }
    

    @media only screen and (min-width:415px) and (max-width:768px){
        margin-bottom: 70%;
        h2{
            width:55%;
        }
        .opacityYellow{
            z-index:3;
            h2{
                padding-bottom:6%;
            }
        }
        .icons{
            top:-19%;
           
        }
        .button{
            width:45%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:flex;
        width:85%;
        margin-bottom:28%;

        .yellow{
            width:43%;
            height:350px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:left;
            margin-bottom:0;
            img{
                display:block;
                position:absolute;
                top: -27%; 
            }
        }

        h2{
            width:55%;
            margin: 0 auto;
            padding:0;
            
        }
        .opacityYellow{
            position: absolute;
            left: 35%;
            top: 30%;
            width:50%;
            height: 400px;
            margin-bottom:0;
            padding-left: 14%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:left;
            z-index:-1;
            h2{
                width: 85%;
                padding:0;
                padding-right: 12%;
                padding-bottom:6%;
                margin: 0 auto;
                font-size:32px;
                line-height: 40px;
            }
        }
        .icons{
            top:-19%;
        }
        .iconPlant{
            display:block;
            top: -10%;
            left: -31%;
        }
        .button{
            width:55%;
            padding:0;
            padding-right: 42%;
        }
    }
    @media only screen and (min-width:1025px){
        display:flex;
        width:1200px;
        margin-bottom:20%;

        .yellow{
            width:48%;
            height:500px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:left;
            margin-bottom:0;
            img{
                display:block;
                position:absolute;
                top: -10%;
        left: 30%;
            }
            h2{
                padding-top:13%;
            }
        }

        h2{
            width:60%;
            margin: 0 auto;
            padding:0;
            
        }
        .opacityYellow{
            position: absolute;
            left: 25%;
            top: 30%;
            width:60%;
            height: 450px;
            margin-bottom:0;
            padding-left: 14%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:left;
            z-index:-1;

            h2{
                width: 60%;
                padding:0;
                
                padding-left:20%;
                padding-bottom:6%;
                margin: 0 auto;
                font-size:32px;
                line-height: 40px;
            }
        }
        .icons{
            top:-16%;
            left: 90%;
            img{
                width: 160%;
            }
        }
        .iconPlant{
            display:block;
            width: 70%;
            top: -35%;
            left: -80%;
        }
        .button{
            width:55%;
            padding:0;
            padding-left: 15%;
        }
    }
    

`;

export { ContentStyle };
