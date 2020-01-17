import styled from 'styled-components';


const HeaderStyle = styled.div`

    width:100vw;
    main{
        background-image: url("/static/img/map.jpg");
        background-size:cover;
        background-position:center;
        border-radius: 16px;
        width:89vw;
        height: 75vh;
        margin:0 auto;
        text-align:center;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    h2{
        width:80%;
        padding-top:20%;
        padding-bottom:5%;
    }
    .card{
        position:relative;
        margin-top:-85%;
    }
    .icon{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        z-index: 3;
    }

    .icon1, .icon3, .icon4, .icon5{
        position: absolute;
    }
    .icon1{
        width: 45px;
        top: 70%;
    }
    .icon2, .icon5{
        display:none;
    }
    .icon3{
        width: 50px;
        top: 55%;
        left: 63%;
    }
    .icon4{
        width: 45px;
        top: 87%;
        left: 88%;
        
    }
    .cardContainer{
        overflow-x: scroll;
        display:flex;
        padding-bottom: 2%;
        position: relative;
        margin-top:-70%;
        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        main{
            width:95vw;
            height: 67vh;
        }
        .cardContainer{
            margin-top:-35%;
        }
        .card{
            margin-top: -35%;
        }
        .icon1{
            top: 53%;
        }
        .icon3{
            top: 48%;
        }
        .icon4{
            top: 81%;
            left: 94%;
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
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 70px;
            top: 30%;
            left: 45%;
        }
        .icon2{
            width:60px;
            top: 33%;
            left: 4%;
        }
        .icon3 {
            width: 80px;
            top: 37%;
            left: 22%;
           
        }
        .icon4 {
            width: 70px;
            top: 48%;
            left: 68%;
        }
        .icon5{
            width: 65px;
            top: 36%;
            left: 90%;
        }
        .cardContainer{
            position: relative;
            min-height: 420px;
            width:100%;
            margin-top:-18%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        main{
            width:96vw;
            height: 80vh;

        }
        h2{
            padding-top:15%;
            padding-bottom:2%;
        }
        .card{
            margin-top: -15%;
        }
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 70px;
            top: 63%;
            left: 45%;
        }
        .icon2{
            width:60px;
            top: 75%;
            left: 4%;
        }
        .icon3 {
            width: 80px;
            top:60%;
            left: 22%;
           
        }
        .icon4 {
            width: 70px;
            top: 70%;
            left: 68%;
        }
        .icon5{
            width: 65px;
            top: 70%;
            left: 95%;
        }
        .cardContainer{
            position: relative;
            min-height: 420px;
            width:100%;
            margin-top:-18%;
        }
    }
    @media only screen and (min-width:1441px){
        main{
            width:97vw;
            height: 80vh;

        }
        h2{
            padding-top:15%;
            padding-bottom:2%;
        }
        .card{
            margin-top: -15%;
        }
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 70px;
            top: 63%;
            left: 45%;
        }
        .icon2{
            width:60px;
            top: 75%;
            left: 4%;
        }
        .icon3 {
            width: 80px;
            top:60%;
            left: 22%;
           
        }
        .icon4 {
            width: 70px;
            top: 70%;
            left: 68%;
        }
        .icon5{
            width: 65px;
            top: 70%;
            left: 95%;
        }
        .cardContainer{
            position: relative;
            min-height: 435px;
            width:100%;
            margin-top:-14%;
        }
    }
    

`;

export { HeaderStyle };
