import React from "react";
import { SiteHeaderStyled } from "./SiteHeader.styled";

//Icons
import { ReactComponent as IconArrowTopRight } from "../../assets/icons/arrow-top-right.svg";
import { HashLink as ScrollLink } from "react-router-hash-link";
import { FirebaseContext } from "../../App";

export const SiteHeader = () => {
    const FirebaseConstants = React.useContext(FirebaseContext);

    return (
        <SiteHeaderStyled>
            <div id="site-header">
                <div className="header-name">
                    <a href="/portfolio">
                        <h4>Aviral Agarwal</h4>
                    </a>
                </div>

                <div className="header-cta">
                    <ScrollLink to="/portfolio#work" smooth  >
                        <p className="is-selected scrollLink">Work</p>
                    </ScrollLink>
                
                    <ScrollLink to="/portfolio#about" smooth >
                        <p className="scrollLink">About</p>
                    </ScrollLink>

                    <a href={`${FirebaseConstants?.Github}`} target="_blank">
                        <div className="resume-cta">
                            <p className="scrollLink">Nerds</p>
                            <IconArrowTopRight />
                        </div>
                    </a>
                </div>
            </div>
        </SiteHeaderStyled>
    );
};
