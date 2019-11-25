import styled from 'styled-components';


const GalleryStyle = styled.div`
    margin: 0 auto;
    width:90vw;
    margin-bottom:20%;
    .galleryImg{
        position:relative;
        width:100%;
        height: 255px;
        background-color: ${props => (props.photo ? '' : 'red')};
        border-radius:16px;
        margin-bottom:10%;
        img{
            position:absolute;
            left:80%;
        }
    }
    .nextBack{
        margin-top:10%;
    }
    .buttonNextBack{
        display:flex;
        justify-content: space-between;
        width:40%;
        margin-top:10px;
        margin-bottom:10px;
        cursor:pointer;
    }
    .buttonDiv{
        display:flex;
        justify-content: space-between;
        div{
            width: 75px;
            height: 4px;
            background-color:red;
            border-radius:50px;
            cursor:pointer;
        }
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

export { GalleryStyle };
