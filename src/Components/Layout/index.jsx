import { LayoutStyled } from "./Layout.styled";
import { SiteHeader } from "./../SiteHeader/SiteHeader";
import { DashboardContent } from "./../Dashboard/DashboardContent"
import React from "react";
import { Project } from "../Work/Project/Project";
import { About } from "../AboutMe/About";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { FirebaseContext } from "../../App";


const Layout = ({}) => {

    const FirebaseConstants = React.useContext(FirebaseContext);

    const renderProjectList = () => {
        if(FirebaseConstants.ProjectList==undefined) return <></>
        return FirebaseConstants.ProjectList.map((item, index) => {
            return (
            <div key={index}    >
                <Project  project={item} index={index+1} />
            </div>
            )
        })
    }

    return (
        <LayoutStyled>
                <div className="main">
                    <SiteHeader />
                    <DashboardContent />
                    <div className="horizontalLineHolder">
                        <div className="horizontalLine"><span className="horizontalContent">Scroll down to see my work</span></div>
                    </div>

                </div>


                <div className="work" >
                    <div className="projectContent" id="work">
                        { renderProjectList() }
                    </div>
                </div>

                <div className="separationBorder" id="about"></div>
                <div className="aboutMe" >
                    <About/>
                </div>

                <div className="separationBorder" id="contact"></div>

                <div className="footer">
                    <SiteFooter/>
                </div>
        </LayoutStyled>
    );
};

export default Layout;
