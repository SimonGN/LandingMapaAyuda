import styled from 'styled-components';


const NavStyle = styled.div`
    .desktop{
        display:none;
    }
    /* background-color:white;
    height:5%; */
    header{

        display:flex;
        justify-content: space-between;
    }
    .symbol{
        width:90%;
        margin:5% auto;
        display:flex;
        justify-content: space-between;
    }
    nav{
        position:absolute;
        display:flex;
        width:100vw;
        height:100vh;
        /* display:none; */
    }
    .navColor{
        height:100vh;
        width:20vw;
        background-color: #00000090;
    }
    .navMobile{
        background-color:white;
        border-radius:8px 0 0 8px;
        width:70vw;
        height:100vh;
    }
    button{
        text-decoration:none;
        cursor: pointer;
        border: 0;
        border-color:none;
        padding: 2.5% 4%;
        background-color:#76991E40;
        color: #76991E;
        border-radius:8px;
        font-family: "GT–Medium";
        font-size:20px;
    }
    
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        .mobile{
            display:none;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .mobile{
            display:none;
        }
        .desktop{
            display:block;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .mobile{
            display:none;
        }
        .desktop{
            display:block;
        }
    }
    @media only screen and (min-width:1441px){
        .mobile{
            display:none;
        }
        .desktop{
            width:95%;
            margin:0 auto;
            display:flex;
            justify-content:space-between;
            margin-top:1%;
            margin-bottom:1%;
            align-items: center;
        }
        logo{
            width:20%;
        }
        nav{
            cursor: pointer;
            width:38%;
            display:flex;
            justify-content:space-between;
            align-items: center;
            Link:last-child{
                width:20%;
            }
        }
        button{
            padding: 2.5% 4%;
        }
    }

`;

export { NavStyle };
