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
        width: 10%;
        top: 70%;
    }
    .icon2, .icon5{
        display:none;
    }
    .icon3{
        top: 46%;
        left: 63%;
        width: 15%;
        
    }
    .icon4{
        top: 87%;
        left: 88%;
        width: 12%;
    }
    .cardContainer{
        overflow-x: scroll;
        display:flex;
        padding-bottom: 2%;
        position: relative;
        margin-top:-73%;

        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        main{
            height: 67vh;
        }
        .cardContainer{
            margin-top:-35%;
        }
        .card{
            margin-top: -35%;
        }
        .icon1{
            width: 7%;
            top: 53%;
        }
        .icon3{
            top: 48%;
            width: 7%;
        }
        .icon4{
            top: 81%;
            left: 94%;
            width: 6%;
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
            width: 4%;
            top: 54%;
            left: 44%;
        }
        .icon2{
            top: 67%;
            left: 4%;
            width: 3%;
        }
        .icon3 {
            top: 67%;
            left: 22%;
            width: 6%;
        }
        .icon4 {
            top: 80%;
            left: 68%;
            width: 5%;
        }
        .icon5{
            top: 56%;
            left: 90%;
            width: 5%;
        }
        .cardContainer{
            position: relative;
            min-height: 353px;
            width:100%;
            margin-top:-18%;
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
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 2%;
            top: 55%;
            left: 45%;
        }
        .icon2{
            top: 70%;
            left: 5%;
            width: 3%;
        }
        .icon3 {
            top: 59%;
            left: 25%;
            width: 6%;
        }
        .icon4 {
            top: 67%;
            left: 70%;
            width: 4%;
        }
        .icon5{
            top: 58%;
            left: 92%;
            width: 3%;
        }
        .cardContainer{
            position: relative;
            min-height: 353px;
            width:100%;
            margin-top:-18%;
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
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 3%;
            top: 63%;
            left: 44%;
        }
        .icon2{
            width: 2%;
            top: 70%;
            left: 5%;

        }
        .icon3 {
            width: 4%;
            top: 62%;
            left: 25%;

        }
        .icon4 {
            width: 3%;
            top: 73%;
            left: 71%;
        }
        .icon5{
            width: 2%;
            top: 66%;
            left: 92%;

        }
        .cardContainer{
            position: relative;
            min-height: 380px;
            width:100%;
            margin-top:-11%;
        }
    }

`;

export { HeaderStyle };
