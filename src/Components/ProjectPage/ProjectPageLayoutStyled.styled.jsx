import { styled } from "styled-components";

export const ProjectPageLayoutStyled = styled.div`

    .main{
        padding: 0 120px;
        margin-top:20px;          
    }

    a {
        text-decoration: none;
        color:inherit;
    }

    .backBtn{
        color: var(--Black-40, #999);
        font-size: 14px;
        font-style: italic;
        display:flex;
        gap:8px;
        cursor:pointer;
    }
    
    .separationBorder{
        margin-top:80px;
        width: 100%;
        height: 11px;
        background: #FF5C5C;
    }

    .footer{
        background:black;
        color:white;
    }

    @media only screen and (max-width: 600px) {
        .main{
            padding: 0 30px;
            margin-top:20px;          
        }
        
     }

   
  
`;
