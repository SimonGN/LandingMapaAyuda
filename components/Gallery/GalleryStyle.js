import styled from 'styled-components';


const GalleryStyle = styled.div`
    margin: 0 auto;
    width:90vw;
    margin-bottom:25%;
    .galleryImg{
        position:relative;
        width:100%;
        height: 255px;
        background-color: ${props => (props.photo ? '' : 'red')};
        background-image: ${props => (props.photo ? `url(${props.photo})` : '')};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius:16px;
        margin-bottom:10%;
        img{
            position:absolute;
            left:80%;
        }
    }
    .nextBack{
        margin-top:10%;
    }
    .button{
        padding-top:5%;
    }
    .buttonNextBack{
        display:flex;
        justify-content: space-between;
        width:40%;
        margin-top:10px;
        margin-bottom:10px;
        cursor:pointer;
    }
    .buttonDiv{
        display:flex;
        justify-content: space-between;
        div{
            width: 75px;
            height: 4px;
            background-color:#F2F2F2;
            border-radius:50px;
            cursor:pointer;
        }
        div.active {
            background-color:#F1A409;
        }
    }
    .textImg{
        height:260px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        h2{
            text-align:left;
            height:50px;
            font-size: 20px;
            line-height: 24px;
        }
    }



    @media only screen and (min-width:415px) and (max-width:768px){
        margin-bottom: 15%;
        h2{
            text-align:center;
        }
        .component{
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .galleryImg{
            width:50%;
            margin-bottom:0;
        }
        .textImg{
            width: 40%;
        }
        .buttonDiv{
            div{
                width: 60px;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin-bottom: 10%;
        margin-top: 10%;
        h2{
            text-align:center;
        }
        .component{
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .galleryImg{
            width:50%;
            height: 340px;
            margin-bottom:0;
        }
        .nextBack{
            margin-top:10%;
        }
        .textImg{
            width: 45%;
            height:330px;
            padding-left: 5%;
            padding-right: 10%;
            h2{
                text-align:left;
                height:115px;
                font-size: 20px;
                line-height: 24px;
            }
        }
        .buttonDiv{
            div{
                width: 75px;
            }
        }
        .textImg{
            height: 370px;
            padding: 0 8%;
            display: flex;
            flex-flow: column;
            justify-content: flex-end;
            display: flex;
            flex-flow: column;
            justify-content: flex-end;
            h2{
                text-align:left;
                line-height: 40px;
                font-size: 32px;
            }
        }
    }
    @media only screen and (min-width:1025px) {
        width:75vw;
        margin-bottom: 10%;
        h2{
            text-align:center;
            margin-bottom: 2.5%;
        }
        .component{
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .galleryImg{
            width:50%;
            height: 400px;
            margin-bottom:0;
        }
        .nextBack{
            margin-top:20%;
        }
        .textImg{
            width: 45%;
            height:340px;
            padding-left: 10%;
            padding-right: 10%;
            h2{
                text-align:left;
                height:115px;
                font-size: 20px;
                line-height: 24px;
            }
        }
        .buttonDiv{
            div{
                width: 95px;
            }
        }
        .textImg{
            width: 40%;
            height: 360px;
            padding: 0 8%;
            display: flex;
            flex-flow: column;
            justify-content: flex-end;
            h2{
                text-align:left;
                line-height: 40px;
                font-size: 32px;
            }
        }
    }
    

`;

export { GalleryStyle };
