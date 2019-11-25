import styled from 'styled-components';


const TypeVolStyle = styled.div`
    width:100%;
    margin:0 auto;
    .textAll, .button{
        width:90%;
        margin:0 auto;
    }
    .card{
        overflow-x: scroll;
        display:flex;

        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
    .button{
        margin-bottom: 20%;
    }
    .text{
        h2, p{
            margin-bottom: 4%;
        }
    }
    .filter{
        display:flex;
        white-space:nowrap;
    }
    .dropDown{
        padding-left:2%;
        margin-bottom:6%;
        width: 50%;
        cursor: pointer;
        p{
            display: flex;
            img{
                margin-left:5%;
            }
        }
    }
    .dropDown{
            margin-bottom: 7%;
            width: 35%;
            display:flex;
            justify-content: space-between;
            div{
                width: max-content;
            }
        }
    .Dropdown-menu{
        background-color: white;
        padding: 4% 2.5% 0% 2.5%;
        box-shadow: 0px 2px 12px #00000020;
        position: absolute;
        padding-bottom:15px;
        border-bottom-left-radius:16px;
        border-bottom-right-radius:16px;
        max-height:150px;
        overflow-y:scroll;
        white-space:nowrap;
        div{
            padding-bottom:18px;
        }
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            width:60%;
            margin:0 auto;
        }
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .text{
            width:50%;
            h2{
                margin-bottom: 4%;
            }
            p{
                margin-bottom:0;
            }
        }
        .card, .textAll, .button{
            width: 94%; 
        }
        .card{
            overflow-x: hidden;
            margin: 0 auto;
            display:flex;
            justify-content:space-between;
            margin-bottom:1%;
        }
        .textAll{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom:3%;
        }
        .filter{
            width: auto;
            margin-right:0%;
        }
        .Dropdown-menu{
            position: absolute;
            left: 74%;
            white-space:nowrap;
        }
        .dropDown{
            margin-bottom: 0;
            width: auto;
            display:flex;
            justify-content: space-between;
            div{
                width: max-content;
            }
        }
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .text{
            width: 70%;
            h2{
                margin-bottom: 4%;
            }
            p{
                margin-bottom: 0%;
            }
        }
        .card, .textAll, .button{
            width: 94%; 
        }
        .card{
            overflow-x: hidden;
            margin: 0 auto;
            display:flex;
            justify-content:space-between;
        }
        .textAll{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom:3%;
        }
        .filter{
            width: auto;
            margin-right:0;
            display: flex;
            justify-content: flex-end;
        }
        .Dropdown-menu{
            position: absolute;
            left: 81%;
            white-space:nowrap;
            padding: 1% 1.5% 0% 1.5%;
        }
        .dropDown{
            margin-bottom:0;
            width: auto;
            display:flex;
            justify-content: space-between;
            div{
                width: max-content;
            }
        }
        
    }
      
    @media only screen and (min-width:1441px){

        .card, .textAll, .button{
            width: 75%; 
        }
        .card{
            overflow-x: hidden;            
            margin: 0 auto;
            margin-bottom:1%;
            display:flex;
            justify-content:space-between;
        }
        .text{
            width:70%;
            p{
                margin-bottom:0;
            }
            h2{
                margin-bottom: 4%;

            }
        }
        .textAll{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom:2.5%;
        }
        .filter{
            width: auto;
            margin-right:0;
            display: flex;
            justify-content: flex-end;
        }
        .Dropdown-menu{
            position: absolute;
            left: 75%;
            padding: 1% 1.5% 0% 1.5%;
        }
        .dropDown{
            margin-bottom: 0;
            width: auto;
            display:flex;
            justify-content: space-between;
            div{
                width: max-content;
            }
        }
        
    }

`;

export { TypeVolStyle };
