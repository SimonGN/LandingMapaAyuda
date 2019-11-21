import styled from 'styled-components';


const OpportunityStyle = styled.div`
    width:100%;
    margin:0 auto;
    .textAll, .button{
        width:90%;
        margin:0 auto;
    }
    .card{
        overflow-x: scroll;
        display:flex;

        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
    .button{
        margin-bottom: 20%;
    }
    .text{
        h2, p{
            margin-bottom: 4%;
        }
    }
    .filter{
        display:flex;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
  
    }
    @media only screen and (min-width:1441px){
     
    }

`;

export { OpportunityStyle };
