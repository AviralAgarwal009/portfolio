import { styled } from "styled-components";

export const ProjectStyled = styled.div`
  .project{
    font-size: 24px;
    font-style: normal;
    margin-top:112px;
  }

  .flex{
    display:flex;
  }

  .overallProject{
    gap:13px;
    flex-wrap: wrap;
    margin-top:24px;
  }

  .projectMetadata{
    flex-grow: 1;
  }

  .mainTitle{
    justify-content: space-between;
  }

  .titleInfo{
    justify-content:space-between;
  }

  .projectIndex{
    color: rgba(255, 255, 255, 0.50);
  }
  
  .projectTitle{
    color: #FFF;
    font-size:36px;
  }

  .projectTags{
    color: rgba(255, 255, 255, 0.60);
    font-family: HelveticaNeueMed;
    font-size: 18px;
    letter-spacing: 0.9px;
    
  }
  
  .titleGap{
    gap:13px;
  }

  .projectSummary{
    color: rgba(255, 255, 255, 0.60);
    font-family: HelveticaNeueMed;
    font-size: 18px;
    line-height: 155.1%; /* 27.918px */
    letter-spacing: 0.36px;
  }

  .projectUrl{
    display: flex;
    align-items: center;
    margin-top:10px;
    font-family: HelveticaNeueMed;
    font-size: 14px;
    font-style: italic;
    letter-spacing: 0.76px;
    cursor:pointer;
  }

  .projectImage{
    max-width:1000px;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  @media only screen and (max-width: 600px) {
    
    .project{
      padding:10px;
    }

    .projectImage{
      max-width:100%;
    }

    .projectTitle{
      font-size:24px;
    }

    .projectTags{
      font-size:12px;
    }

   }

`;
