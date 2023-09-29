import { styled } from "styled-components";

export const ProjectDetailsStyled = styled.div`

    .projectMain{
        margin-top:30px;
    }

    .title{
        font-family: Georgia;
        font-size: 40px;
    }

    .horizontalLine{
        background: rgba(0, 0, 0, 0.20);
        height:1px;
        width:100%;
        margin:16px 0;
    }

    .verticalDivision{
        display:flex;
        gap:76px;
    }

    .projectSummary{
        flex:0 0 60%;
        color: rgba(0, 0, 0, 0.80);
        white-space: pre-line;

    }

    .projectMetrics{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px; 
    }

    .projectImage{
        margin-top:80px;
        text-align:center;
    }

    .projectImageTag{
        max-width:100%;
    }

    .projectImpact{
        padding:0 125px;
        margin-top:80px;
    }

    .impactTitle{
        color: #FF5C5C;
        font-family: Georgia;
        font-size: 24px;
    }

    .impactDescription{
        color: var(--Black-80, #333);
        font-size: 16px;
    }

    @media only screen and (max-width: 600px) {
       .verticalDivision{
        flex-direction:column;
       }

       .projectImpact{
            padding:0 30px;
        }
       
    }
  
`;
