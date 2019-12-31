import styled from 'styled-components';


const CardAllStyle = styled.div`

    .card{
        overflow-x: scroll;
        display:flex;
        padding-bottom: 2%;

        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }


    .icon{
       /* position:relative;  */
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
        top: -3%;
        left: 55%;
        width: 15%;
        
    }
    .icon4{
        top: 50%;
        left: 88%;
        width: 12%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
       .icon1{
        width: 7%;
        top: 33%;
       }
       .icon3{
        top: -7%;
        width: 7%;
       }
       .icon4{
        top: 55%;
        left: 94%;
        width: 6%;
       }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 5%;
            top: -3%;
            left: 47%;
        }
        .icon2{
            top: 39%;
            left: 4%;
            width: 3%;
        }
        .icon3 {
            top: 28%;
            left: 23%;
            width: 7%;
        }
        .icon4 {
            top: 43%;
            left: 57%;
            width: 5%;
        }
        .icon5{
            top: 7%;
            left: 92%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){    
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 5%;
            top: -3%;
            left: 47%;
        }
        .icon2{
            top: 39%;
            left: 4%;
            width: 3%;
        }
        .icon3 {
            top: 28%;
            left: 23%;
            width: 7%;
        }
        .icon4 {
            top: 43%;
            left: 57%;
            width: 5%;
        }
        .icon5{
            top: 7%;
            left: 92%;
        }
    }
    @media only screen and (min-width:1441px){
        .icon2, .icon5{
            display:block;
            position: absolute;
        }
        .icon1{
            width: 4%;
            top: -7%;
            left: 49%;
        }
        .icon2{
            top: 35%;
            left: 4%;
            width: 2%;
        }
        .icon3 {
            top: 8%;
            left: 33%;
            width: 4%;
        }
        .icon4 {
            top: 39%;
            left: 67%;
            width: 3%;
        }
        .icon5{
            top: 7%;
            left: 92%;
        }
    }

`;

export { CardAllStyle };
