import { ProjectPageLayoutStyled } from "./ProjectPageLayoutStyled.styled";
import { SiteHeader } from "./../SiteHeader/SiteHeader";
import { ReactComponent as IconLeftBack } from './../../assets/icons/left-back.svg';
import { useSearchParams  } from "react-router-dom";
import { ProjectDetails } from "./ProjectDetails/ProjectDetails";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import React from "react";
import { FirebaseContext } from "../../App";


const ProjectPageLayout = () => {

    const FirebaseConstants = React.useContext(FirebaseContext);

    const [searchParams, setSearchParams] = useSearchParams()

    const projectId = searchParams.get('projectId');
    let project = -1;
    if(FirebaseConstants?.ProjectInfo){
        project = FirebaseConstants?.ProjectInfo?.find((item)=>{
            return item.id == projectId;
        })
        if(project==undefined) project=-2;

    }

    if(FirebaseConstants==undefined || project==-1){
        return <></>
    }else if(project==-2){
        return <div>Page Not Found</div>
    }

    return (
        <ProjectPageLayoutStyled>

            <SiteHeader />

            <div className="main">

                <div >
                   <a href="/"> <p className="backBtn"><IconLeftBack/> BACK</p></a>
                </div>

                <ProjectDetails projectInfo={project} />

            </div>
            
            <div className="separationBorder" id="contact"></div>

            <div className="footer">
                <SiteFooter/>
            </div>

        </ProjectPageLayoutStyled>
    );
};

export default ProjectPageLayout;
