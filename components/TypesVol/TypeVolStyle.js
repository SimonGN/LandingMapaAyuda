import styled from 'styled-components';


const TypeVolStyle = styled.div`
    width:100%;
    margin:0 auto;
    margin-bottom: 120px;
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
    .text{
        p{
            margin-bottom: 4%;
        }
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            width:100%;
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
    }
    @media only screen and (min-width:1025px){
        margin-bottom:145px;
        width: 1200px; 
        .text{
            width: 90%;

            h2{
                width:60%;
                margin-bottom: 0;
            }
            p{
                margin-bottom: 0%;
            }
        }
        .ptext{
            font-size:20px;
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
            width:250px;
            margin: 0;
        }
        
    }
      
    

`;

export { TypeVolStyle };
