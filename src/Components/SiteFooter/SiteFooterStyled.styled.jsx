import { styled } from "styled-components";

export const SiteFooterStyled = styled.div`

    .footer{
        padding-top:100px;
        font-family: Georgia;

    }

    .footerContent{
        text-align:center;
    }

    .heading{
        color: #FFF;
        font-size: 40px;
    }

    .subHeading{
        color: rgba(255, 255, 255, 0.60);
        font-size: 40px;
    }

    .contactme{
        margin-top:25px;
        font-family: HelveticaNeueMed;
        font-style: italic;
    }

    .contactHeading{
        color: rgba(255, 255, 255, 0.60);
        font-size: 14px;
        letter-spacing: 0.28px;
    }

    .contactMail{
        color: #FFF;
        font-size: 18px;
        letter-spacing: 0.36px;
    }

    .signingOff{
        margin-top:28px;
        color: rgba(255, 255, 255, 0.60);
        font-family: HelveticaNeueMed;
        font-size: 18px;
        letter-spacing: 0.36px;
    }

    .emotes{
        color:white;
    }


    #site-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 5rem;
    }

    .header-name {
        a {
            color: #4c4c4c;
            text-decoration: none;

            h4 {
                font-size: 1rem;
                letter-spacing: 0.5px;
                font-weight: 600 !important;
            }
        }
    }

    .header-cta {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 2.5rem;

        p {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.60);
        }

    }

    .footerItem{
        color: rgba(255, 255, 255, 0.60);
        font-size: 16px;
        letter-spacing: 0.48px;
        font-size: 1rem;
   
    }

    a {
        text-decoration: none;
        color:inherit;
    }


    @media only screen and (max-width: 600px) {
       
        #site-footer{
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }
    }
`;
