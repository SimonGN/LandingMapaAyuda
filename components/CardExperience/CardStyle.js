import styled from 'styled-components';


const CardStyle = styled.div`
@keyframes translate {
  from {
      right:0;
  }

  to {
    right:2100px;
  }
}
@keyframes opacityCard {
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

margin-left: 5%;
width: 222px;
flex-grow:1;
flex: none;
    .cardStyle{
        position: relative;
        padding: 8px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
        animation-duration: 60s;
        animation-name: translate;
        animation-iteration-count: infinite; 
    }
    .cardStyle:hover{
        /* -webkit-animation: 0; */
        -webkit-animation-play-state: paused;
    }
    .button{
        display: flex;
        justify-content: center;
        p{
            text-align:center;
        }
    }
    .img{
        position:relative;
    }
    .imgFondo{
        margin-top: 2%;
        background-image:${props => props.photo ? `url(${props.photo})` : "photo"};
        background-color: ${props => (props.photo ? '' : '#fffff')};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height:122px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position:absolute;
        background-image: url("${props => props.people ? props.people : "people"}");
        background-color: ${props => (props.photo ? '' : '#fffff')};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width:40px;
        height:40px;
        border-radius: 18px;
        border: 3px solid white;
        left: 70%;
        top: 80%;
    }

    .country{
        padding: 5% 10% 3% 0;
    }
    .text{
        width: 90%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin:0 auto;
        text-overflow: clip ellipsis;
        & p{
            text-overflow: clip ellipsis;
            margin-bottom:2%;
        } 
        
    }
    .description{
        padding:3% 0 5%;
    }
    .readmore{
        width:100%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        
        margin-left: 3%;
        .description{
            padding:4% 0 7%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin-top: ${props => props.number ? props.number : "4%"};
        margin-left: 2%;
        width: 350px;
        height:100px;
        .cardStyle{
            padding:0;
            height: auto;
            
        }
        .text{
            display:none;
            opacity:0;
        }
        .imgPeople{
            display:none;
        }
        .imgFondo{
            height:226px;
        }

        &:hover {
            
             .cardStyle{
                padding: 15px;
            }
            .text{
                display:block;
                opacity:1;
                animation: opacityCard 1s;
            }
            .imgPeople{
                display:block;
                width: 60px;
                height: 60px;
                border: 5px solid white;
                top: 83%;
            }
            .imgFondo{
                height:200px;

            }
        }
        .description{
            padding: 3% 0 4%;
        }
        .readmore{
            padding: 14px 105px;
        }
    }
    @media only screen and (min-width:1025px) {
        margin-top: ${props => props.number ? props.number : "4%"};
        margin-left: 2.2%;
        height:100px;
        width: 350px;
        .cardStyle{
            padding:0;
            height: auto;
        }
        .text{
            display:none;
        }
        .imgPeople{
            display:none;
        }
        .imgFondo{
            height:226px;
        }

        &:hover {
           
             .cardStyle{
                padding: 15px;
            }
            .text{
                display:block;
                opacity:1;
                animation: opacityCard 1s;
            }
            .imgPeople{
                display:block;
                width: 60px;
                height: 60px;
                border: 5px solid white;
                top: 83%;
            }
            .imgFondo{
                height:200px;
            }
        }
        .description{
            padding: 2% 0 6%;
        }
        .readmore{
            padding: 14px 105px;
        }
        
    }
    
`;

export { CardStyle };