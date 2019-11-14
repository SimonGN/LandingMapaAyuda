import styled from 'styled-components';


const NavStyle = styled.div`
z-index:99;
    p, a{
        text-decoration:none;
        cursor:pointer;
    }
    img{
        cursor:pointer; 
    }

    .aLogo{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    position:fixed;
    width:100%;
    div{
        padding-top:2%;
        padding-bottom:2%;
        width:90%;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        }
    .logo{
        display:none;
    }
    .simbolo{
        width:13%;
    }
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        div{
            width:50%;
        }
        .logo{
            display:block;
            width:40%;
        }
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        div{
            width:50%;
        }
        .logo{
            display:block;
            width:35%;
        } 
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        div{
            width:50%;
            padding-top:1%;
            padding-bottom:1%;
        }
       
        
        .logo{
            display:block;
            width:30%;
        } 
        .simbolo{
            display:none;
        }
    }
    @media only screen and (min-width:1441px){
        div{
            width:40%;
            padding-top:1%;
            padding-bottom:1%;
        }
        
        .logo{
            display:block;
            width:30%;
        } 
        .simbolo{
            display:none;
        }
    }

`;

export { NavStyle };
