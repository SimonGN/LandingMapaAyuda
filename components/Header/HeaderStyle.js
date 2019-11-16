import styled from 'styled-components';


const HeaderStyle = styled.div`
    main{
        background-image: url("/static/img/map.jpg");
        background-size:cover;
        background-position:center;
        border-radius: 16px;
        width:90vw;
        height: 70vh;
        margin: 0 auto;
        text-align:center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

    }
    /* overflow-x */
    
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
    }
    @media only screen and (min-width:1441px){
        
    }

`;

export { HeaderStyle };
