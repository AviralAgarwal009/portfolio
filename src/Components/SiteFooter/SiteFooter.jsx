import React from "react";
import { SiteFooterStyled } from "./SiteFooterStyled.styled";
import { FirebaseContext } from "../../App";

export const SiteFooter = () => {

    const FirebaseConstants = React.useContext( FirebaseContext );

    return (
        <SiteFooterStyled>
            <div className="footer">
                <div className="footerContent">

                    <div className="heading">
                        Let’s work together.
                    </div>
                    <div className="subHeading">Get in touch.</div>

                    <div className="contactme">
                        <div className="contactHeading">CONTACT ME</div>
                        <div className="contactMail">{ FirebaseConstants?.Mail }</div>
                    </div>

                    <div className="signingOff">
                    Drop a message, and I'll be sure to catch it and reply with a smiley. <span className="emotes">😊</span>
                    </div>
                </div>

                <footer>
                    <div id="site-footer">
                        <div className="footerItem">
                           <p>© Aviral Agarwal</p> 
                        </div>

                        <div className="header-cta">
                                <p><a href={`mailto:${FirebaseConstants?.Mail}`}>Email</a></p>
                                <p><a href={`${FirebaseConstants?.Resume}`} target="_blank">Resume</a></p>
                                <p><a href={`${FirebaseConstants.LinkedIn}`} target="_blank">LinkedIn</a></p>
                        </div>
                    </div>
                </footer>

               
            </div>
        </SiteFooterStyled>
    );
};
