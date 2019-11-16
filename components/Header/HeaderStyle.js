import styled from 'styled-components';


const HeaderStyle = styled.div`
    main{
        background-image: url("/static/img/map.jpg");
        background-size:cover;
        background-position:center;
        border-radius: 16px;
        width:90vw;
        height: 75vh;
        margin: 0 auto;
        text-align:center;
        display: flex;
        flex-flow: column;
        align-items: center;
        position:relative
    }
    h2{
        padding-top:20%;
        padding-bottom:5%;
    }
    .card{
        position: absolute;
        top: 42%;
        padding-left: 10%;
    }
    .icon{
        
        overflow: hidden;
        position: absolute;
        top: 40%;
        left:5%;
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .icon1, .icon3, .icon4{
    }
    .icon2, .icon5{
        display:none;
    }
    .icon3{
        margin-bottom: 70%;
        margin-left:10%;
        width: 60px;
    }
    .icon4{
        width: 50px;
        margin-bottom: -35%;
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        main{
            height: 67vh;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
    }
    @media only screen and (min-width:1441px){
        
    }

`;

export { HeaderStyle };
