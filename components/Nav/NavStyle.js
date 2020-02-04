import styled from 'styled-components';


const NavStyle = styled.div`
    overflow:hidden;
    .desktop{
        display:none;
        .logo{
            width: 160px;
            cursor: pointer;
        }
    }
    @keyframes moveNav{
        0%{transform: translate3d(319px, 0, 0)}
        100%{transform: translate3d(0px, 0, 0)}
    }
    header{
        
        display:flex;
        justify-content: space-between;
    }
    .symbol{
        width:90%;
        margin:25px auto;
        display:flex;
        justify-content: space-between;
    }
    nav{
        overflow: hidden;
        position:fixed;
        z-index:3;
        display:flex;
        width:100vw;
        height:100vh;
        display: ${props => props.view ? 'block' : 'none'};
    }
    .navColor{
        position:absolute;
        z-index: 1;
        width:100vw;
        height:100vh;
        width:100vw;
        background-color: #00000090;
    }
    .navMobile{
        position:absolute;
        left:15%;
        z-index: 2;
        padding-top: 6%;
        padding-left:10%;
        background-color:white;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        width:80%;
        height:95%;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        animation: moveNav 1s;
        /* display:none */
    }
    .navMenuMobile{
        width:70%;
        height: 90%;
        display:flex;
        flex-flow:column;
        align-items:flex-end;
        padding-right: 15%;
        justify-content: space-between;
        
    }
    .navMenu1, .navMenu2{
        display: flex;
        flex-flow:column;
        align-items:flex-end;
        justify-content: space-between;
        
    }
    .navMenu1{
        height:10vh;
        margin-top: 40%;
    }
    .navMenu2{
        div{
            width:103%;
            display:flex;
            justify-content: space-between;
            padding-top:10%;
            padding-bottom: 40%;

        }
    }
    button{
        text-decoration:none;
        cursor: pointer;
        border: 0;
        border-color:none;
        padding: 18px 38px;
        background-color:#76991E40;
        color: #76991E;
        border-radius:8px;
        font-family: "GT–Medium";
        font-size:20px;
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
        .mobile{
            display:none;
        }
        .desktop{
            width:95%;
            margin:2% auto;
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

    
    @media only screen and (min-width:1025px){
        .mobile{
            display:none;
        }
        .desktop{
            width:97%;
            margin:1% auto;
            display:flex;
            justify-content:space-between;

            align-items: center;
        }
        logo{
            width:20%;
        }
        nav{
            cursor: pointer;
            position:relative;
            width: 520px;
            max-height:40px;
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

export { NavStyle };
