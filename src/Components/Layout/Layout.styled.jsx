import { styled } from "styled-components";

export const LayoutStyled = styled.div`

    .main{
        height:100vh;
    }

    .work{
        background: #0C0C0C;  
        color:white;  
        padding-top:38px;
        display:flex;
        justify-content: center;
        padding-bottom:100px;
    }

    .horizontalLineHolder{
        position:absolute;
        bottom:87px;
        width:100%;
        text-align:center;
        padding: 2rem 120px;
        color: rgba(0, 0, 0, 0.60);
        box-sizing:border-box;
    }
    
    .horizontalLine{
       
        padding:0 2rem;
        text-align: center; 
        background: rgba(0, 0, 0, 0.20);        
        line-height: 0.1em;
    }
    .horizontalContent{
        background:#fff; 
        padding:0 28px; 
        font-family:HelveticaNeueMed
    }

    .separationBorder{
        width: 100%;
        height: 11px;
        background: #FF5C5C;
    }
    
    .aboutMe{
        margin:auto;
        margin-top:150px;
        width:80%;
    }

    .footer{
        background:black;
        color:white;
    }

  
`;
