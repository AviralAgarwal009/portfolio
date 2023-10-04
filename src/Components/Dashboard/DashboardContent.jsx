import React from "react";
import { DashboardContentStyled } from "./DashboardContent.styled";
import { ReactComponent as IconHighFive } from "../../assets/icons/high-five.svg";
import { HashLink as ScrollLink } from "react-router-hash-link";
import { FirebaseContext } from "../../App";


export const DashboardContent = () => {
    const firebaseConstants = React.useContext(FirebaseContext);  
    return (
        <DashboardContentStyled>
            
            <div className="summary center">
                <div> 

                    <IconHighFive />
                    &nbsp;
                    <img src={require('./../../assets/icons/work-man.png')} />
                </div>
                <br/>
                <strong className="dashboardTitle">Aviral </strong> {firebaseConstants.Summary}
                <ScrollLink to="#contact" smooth={true} duration={400}>
                    <div className="button dashboardBtn">
                        <div className="dot"></div> &nbsp; Let's talk
                    </div>

                </ScrollLink>

            </div>

        </DashboardContentStyled>
    );
};
