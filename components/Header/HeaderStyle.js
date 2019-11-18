import styled from 'styled-components';


const HeaderStyle = styled.div`
    position:absolute;
    main{
        background-image: url("/static/img/map.jpg");
        background-size:cover;
        background-position:center;
        border-radius: 16px;
        width:90vw;
        height: 75vh;
        text-align:center;
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-left: 6%;
    }
    h2{
        padding-top:20%;
        padding-bottom:5%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        main{
            height: 67vh;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        main{
            width:94.5vw;
            max-height: 550px;
            margin-left: 3%;
        }
        h2{
            padding-top:10%;
            padding-bottom:2%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        main{
            width:94.5vw;
            max-height: 650px;
            margin-left: 3%;
        }
        h2{
            padding-top:10%;
            padding-bottom:2%;
        }
    }
    @media only screen and (min-width:1441px){
        main{
            width:94.5vw;
            max-height: 750px;
            margin-left: 3%;
        }
        h2{
            padding-top:10%;
            padding-bottom:2%;
        }
    }

`;

export { HeaderStyle };
