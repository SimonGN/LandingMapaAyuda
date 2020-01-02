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
        p{
            margin-bottom: 4%;
        }
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            width:100%;
        }
        .button{
            margin-bottom: 15%;
        }       
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .text{
            width:100%;
            h2{
                width:50%
            }
            p{
                margin-bottom:0;
            }
        }
        .ptext{
            font-size:20px;
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
        .button{
            margin-bottom: 11%;
        }  
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .text{
            width: 90%;
            h2{
                width:60%;
            }
            p{
                margin-bottom: 0%;
            }
        }
        .ptext{
            font-size:20px;
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
        .button{
            margin-bottom: 14%;
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
            h2{
                width:80%;
            }
            p{
                margin-bottom:0;
            
            }
        }
        .ptext{
            font-size:20px;
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
        .button{
            margin-bottom:10%;
        }
    }

`;

export { TypeVolStyle };
