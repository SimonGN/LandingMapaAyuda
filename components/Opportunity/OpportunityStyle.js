import styled from 'styled-components';


const OpportunityStyle = styled.div`
    width:100%;
    margin:0 auto;
    margin-bottom:120px;
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
    .filter{
        display:flex;
        white-space:nowrap;
        position: relative;
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
        padding: 30px 30px 0 20px;
        box-shadow: 0px 2px 12px ${({theme}) => theme.colors.dark20};
        position: absolute;
        left: -1%;
        padding-bottom:15px;
        border-radius:16px;
        width:190px;
        max-height:250px;
        overflow-y:scroll;
        white-space:nowrap;
        div{
            padding:20px 15px;
        }
        div:hover{
            background-color: ${({theme}) => theme.colors.lightGray};
            border-radius: 8px;
            padding:20px 15px;
        }
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            width:70%;
        }
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .text{
            width:50%;
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
        .ptext{
            font-size:20px;
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
    @media only screen and (min-width:1025px) {
        margin-bottom:189px;
        width: 1200px; 
        .text{
            width: 100%;
            h2{
                width: 650px; 
            }
            p{
                margin-bottom: 0%;
                width: 85%; 
            }
        }
        .card, .textAll, .button{
            width: 1200px; 
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
        .ptext{
            font-size:20px;
        }
        .filter{
            width: auto;
            margin-right:0;
            display: flex;
            justify-content: flex-end;
        }
        .Dropdown-menu{
            position: absolute;
            left:-10px;
            white-space:nowrap;
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
            width:250px;
            margin:0;
        }
        
    }


`;

export { OpportunityStyle };
