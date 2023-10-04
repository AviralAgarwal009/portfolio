import { styled } from "styled-components";

export const SiteHeaderStyled = styled.div`
    #site-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 120px;
    }

    .header-name {
        a {
            color: #4c4c4cb3;
            text-decoration: none;

            h4 {
                font-size: 1rem;
                letter-spacing: 1.5px;
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
            color: lightgray;
        }

        .resume-cta {
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                svg {
                    path {
                        display: none;
                    }
                }
            }

            svg {
                width: 24px;
            }
        }
    }

    .is-selected {
        color: black !important;
    }

    a {
        text-decoration: none;
    }

    .scrollLink{
        cursor:pointer;
    }

    .scrollLink:hover{
        color:black;
        transition: 0.2s;
    }

    @media only screen and (max-width: 600px) {
       
        #site-header{
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }
    }
`;
