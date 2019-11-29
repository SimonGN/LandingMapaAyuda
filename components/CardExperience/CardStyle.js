import styled from 'styled-components';


const CardStyle = styled.div`
margin-left: 8%;
width: 230px;
flex-grow:1;
flex: none;
    .cardStyle{
        position: relative;

        height: 290px;
        padding: 15px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;

    }
    .img{
        position:relative;
    }
    .imgFondo{
        margin-top: 2%;
        background-image:${props => props.photo ? `url(${props.photo})` : "photo"};
        background-color: ${props => (props.photo ? '' : '#fffff')};
        width:100%;
        height:140px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position:absolute;
        background-image: url("${props => props.people ? props.people : "people"}");
        background-color: ${props => (props.photo ? '' : '#fffff')};
        width:40px;
        height:40px;
        border-radius: 12px;
        border: 5px solid white;
        left: 70%;
        top: 85%;
    }

    .country{
        padding:5% 0 3%;
    }
    .text{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .description{
        padding:0 0 5%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        margin-left: 4%;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin-left: 2%;
        /* .img{
            display:block;
        }
        .cardStyle{display:none;}
        &:hover{
            .cardStyle{
                display:block
            }
        } */
        .cardStyle{
            padding:0;
            height: auto;
        }
        .text{
            display:none;
        }

        &:hover {
             .cardStyle{
                height: 290px;
                padding: 15px;
            }
        .text{
            display:block;
        }
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-left: 1.25%;
    }
    @media only screen and (min-width:1441px){
        margin-left: 1.25%;
    }
`;

export { CardStyle };