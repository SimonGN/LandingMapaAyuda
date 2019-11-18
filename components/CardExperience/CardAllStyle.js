import styled from 'styled-components';


const CardAllStyle = styled.div`
    margin-top: 70%;
    .card{

    }


    .icon{
        position: absolute;
        top: 40%;
        left:5%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        z-index: 3;
    }

    .icon1, .icon3, .icon4, .icon5{
        position: absolute;
    }
    .icon1{
        margin-top:130%;
    }
    .icon2, .icon5{
        display:none;
    }
    .icon3{
        margin-bottom: 70%;
        margin-left:90%;
        
    }
    .icon4{
        
        margin-left:50%;
        margin-bottom: -35%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        margin-top: 45%; 
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin-top: 30%; 
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-top: 30%; 
        .icon2, .icon5{
            display:block;
        }
        .icon1{
            order:3;
            width:100px;
        }
        .icon2{
            order:1;
            width:30px;
            margin-top:74%;
            margin-left:10%;
        }
        .icon3{
            order:2;
            width:60px;
            margin-bottom: -35%;
            margin-left: 60%;
            
        }
        .icon4{
            order: 4;
        }
        .icon5{
            order: 5;
        }
    }
    @media only screen and (min-width:1441px){
        margin-top: 25%; 
        .icon2, .icon5{
            display:block;
        }
    }

`;

export { CardAllStyle };
