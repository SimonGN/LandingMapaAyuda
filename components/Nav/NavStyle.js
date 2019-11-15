import styled from 'styled-components';


const NavStyle = styled.div`
    .desktop{
        display:none;
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
            width:97%;
            margin:0 auto;
            display:flex;
            justify-content:space-between;
        }
        logo{
            width:20%;
        }
        nav{
            width:40%;
            display:flex;
            justify-content:space-between;
        }
    }

`;

export { NavStyle };
