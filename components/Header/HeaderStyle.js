import styled from 'styled-components';


const HeaderStyle = styled.div`

    width:100vw;
    main{
        background-image: url("/static/img/map.jpg");
        background-size:cover;
        background-position:center;
        border-radius: 16px;
        width:90vw;
        height: 75vh;
        margin:0 auto;
        text-align:center;
        display: flex;
        flex-flow: column;
        align-items: center;
        /* margin-left: 6%; */
    }
    h2{
        padding-top:20%;
        padding-bottom:5%;
    }
    .card{
        position:relative;
        margin-top:-73%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        main{
            height: 67vh;
        }
        .card{
            margin-top:-33%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        main{
            width:94.5vw;
            max-height: 550px;

        }
        h2{
            padding-top:10%;
            padding-bottom:2%;
        }
        .card{
            margin-top: -21%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        main{
            width:94.5vw;
            max-height: 690px;

        }
        h2{
            padding-top:15%;
            padding-bottom:2%;
        }
        .card{
            margin-top: -15%;
        }
    }
    @media only screen and (min-width:1441px){
        main{
            width:95vw;
            max-height: 780px;

        }
        h2{
            padding-top:10%;
            padding-bottom:2%;
        }
        .card{
            margin-top:-10%;
        }
    }

`;

export { HeaderStyle };
