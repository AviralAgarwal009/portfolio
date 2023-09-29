import { styled } from "styled-components";

export const DashboardContentStyled = styled.div`
   .summary{
    font-size: 24px;
    shape-rendering:"crispEdges";
   }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }

    .button{
        border-radius: 30px;
        border: 0.5px solid #000;
    }

    .dashboardBtn{
        margin:auto;
        margin-top: 40px;
        width: 153px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:18px 33px;
        cursor:pointer;
    }
    
    .dashboardBtn:hover{
        background:black;
        color:white;
        transition: 0.2s;
    }

    .dashboardBtn:hover .dot{
        background-color:white;
        transition: 0.2s;
    }

    .dot{
        width: 8px;
        height: 8px;
        background-color:black;
        border-radius:50%;
    }

    a{
        text-decoration:none;
        color:inherit;
    }

    @media only screen and (max-width: 600px) {
    
        .summary{
            font-size: 20px;
            width:80%;
        }
    
       }

`;
