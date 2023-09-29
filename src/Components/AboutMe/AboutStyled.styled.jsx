import { styled } from "styled-components";

export const AboutStyled = styled.div`
  .heading{
    font-size: 40px;
  }

  .horizontalLine{
    margin-top:15px;
    width:100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.20);
  }

  .verticalDivision{
    margin-top:75px;
    display:flex;
    gap:60px;
  }

  .profileSection{
    width:60%;
  }

  .profile{
    display:flex;
    gap:44px;
  }
  

  .profilePhotoContainer{
    flex:0 0 200px;
    position: relative; 
    width: 200px; 
    height: 200px; 
    overflow: hidden; 
    border-radius: 50%;
  }

  .profilePhoto{
    width: 100%; 
    height: auto; 
    margin-top:-55px;

  }

  .profileTagline{
    align-self:center;
    font-family: HelveticaNeueMed;
    font-size: 34px;
    font-weight: 500;
  }

  .profileSummary{
    margin-top:35px;
    color: rgba(12, 12, 12, 0.60);
    font-family: HelveticaNeueMed;
    font-size: 16px;
 
  }

  .skills{
    flex:0 0 45%;
  }

  .hobby{
    margin-top:150px;
    display: flex;
    justify-content: space-between;
    margin-bottom:150px;
  }

  @media only screen and (max-width: 600px) {
   .verticalDivision{
    flex-direction:column;
   }
   .profile, .hobby{
      flex-direction:column;
   }
   .hobby{
    gap:80px;
   }

   .profileSection{
    width:100%;
   }
  }
  


`;
