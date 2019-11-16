import styled from 'styled-components';


const ButtonStyle = styled.div`
    padding:14px 15px;
    display: inline-block;    
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#1C76E3"};
    border-radius: 8px;
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
    }
    @media only screen and (min-width:1441px){

    }

`;

export { ButtonStyle };
