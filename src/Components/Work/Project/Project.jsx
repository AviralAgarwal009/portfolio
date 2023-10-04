import React from "react";
import { ProjectStyled } from "./ProjectStyled.styled";
import { ReactComponent as IconArrorRight } from './../../../assets/icons/arror-right.svg'
import { Link } from "react-router-dom";

export const Project = ({project,index}) => {


    return (
        <ProjectStyled>
            <div className="project">
                <Link className="projectAnchor" to={`project?projectId=${project.id}`} ><img src={ project.image} className="projectImage" /></Link>
                <div className="flex overallProject">


                    <div className="projectIndex">0{index}</div>

                    <div className="projectMetadata">



                        <div className="flex titleInfo">
                        <Link className="projectAnchor" to={`project?projectId=${project.id}`} ><div className="projectTitle">{project.title}</div></Link>
                        <Link className="projectAnchor" to={`project?projectId=${project.id}`} ><div className="projectTags"> {project.tags}</div></Link>
                        </div>
                        
                        <div className="projectSummary">
                        <Link className="projectAnchor" to={`project?projectId=${project.id}`} >{project.summary}</Link>
                        </div>

                        <div className="projectUrl" >
                            <Link className="projectAnchor" to={`project?projectId=${project.id}`} >VIEW PROJECT &nbsp; <IconArrorRight/></Link>
                        </div>

                    </div>

                </div>
               
            </div>

        </ProjectStyled>
    );
};
