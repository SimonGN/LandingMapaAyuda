import styled from 'styled-components';


const CardCountryStyle = styled.div`
    margin-bottom:5%;
    flex: none;
    width:62%;
    margin-left:5%;
    cursor: pointer;

    img{
        background-color: ${props => (props.photo ? '' : '#fffff')};
        background-size: cover;
        background-repeat: no-repeat;
        border-radius:16px;
        width: 100%;
        
        transition: transform 2s;
    }
    .text{
        width:90%;
        margin:0 auto;
        white-space: normal;
        padding-top:3.5%;
        p{
            font-size:17px;
        }
    }
    .country{
        margin-top:8px;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        width: 33%;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width: 22.5%;
        margin-left:0%;
        margin-bottom:2.5%;
        margin-left:0%;
        .button{
            margin-bottom: 15%;
        }
    }
    @media only screen and (min-width:1025px){
        width: 23%;
        margin-left:0%;
        margin-bottom:2%;
        margin-left:0%;
        img{
            -webkit-transition: all .5s;
            -moz-transition: all .5s;
            -o-transition: all .5s;
            transition: all .5s;
        }
        img:hover, .imgs:focus {
            -ms-transform: scale(1.01);
            -moz-transform: scale(1.01);
            -webkit-transform: scale(1.01);
            -o-transform: scale(1.01);
            transform: scale(1.01);
        }
    }

`;

export { CardCountryStyle };
