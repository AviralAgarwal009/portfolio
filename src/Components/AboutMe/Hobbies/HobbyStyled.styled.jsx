import { styled } from "styled-components";

export const HobbyStyled = styled.div`
  
    .hobbyBubble{
        width: 380px;
        height: 120px;
        border-radius: 63px;
        border: 1px solid #FFA6A6;
        position:relative;
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
    }

    .hobbyImageWrapper::before {
     
        content: '';
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
        filter: blur(19.5px);
        background-image:  ${(props) => props.backgroundGradient || 'linear-gradient(rgba(250, 185, 186, 0.70),rgba(250, 185, 186, 0.70))' }; 
        z-index:-1;
      }

    .hobbyImageWrapper{
        position:absolute;
        margin-top:-40%;
    }

    .hobbyContent{
        color: #1A1A1A;
        text-align: center;
        font-family: Georgia;
        font-size: 18px;
        white-space: pre-line;

    }

    @media only screen and (max-width: 600px) {
        .hobbyBubble{
            width:300px;
        }
        
    }

`;
