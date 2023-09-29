import { styled } from "styled-components";

export const SkillsStyled = styled.div`
  
    .skills{
        display:flex;
        flex-direction:column;
        font-family: HelveticaNeueMed;
    }

    .flex{
        display:flex;
    }

    .skillsItemWrapper{
        margin:17px 0;
        gap:14px;
    }

    .skillListItem{
        flex-direction:column;
    }

    .skillCategory{
        color: #FF5C5C;
    }

    .skillDescription{
        color: rgba(12, 12, 12, 0.60);
        margin-top:10px;
    }

`;
