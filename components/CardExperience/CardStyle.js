import styled from 'styled-components';


const CardStyle = styled.div`
    .cardStyle{
        position: relative;
        margin-right: 5%;
        width: 230px;
        height: 290px;
        padding: 15px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
        flex-grow:1;
        flex: none;
    }
    .img{
        position:relative;
    }
    .imgFondo{
        margin-top: 2%;
        background-image:${props => props.background ? `url(${props.background})` : "photo"};
        background-color:blue;
        width:100%;
        height:140px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position:absolute;
        background-image: url("${props => props.people ? props.people : "people"}");
        background-color:red;
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
`;

export { CardStyle };