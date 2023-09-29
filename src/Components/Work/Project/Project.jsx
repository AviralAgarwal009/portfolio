import React from "react";
import { ProjectStyled } from "./ProjectStyled.styled";
import { ReactComponent as IconArrorRight } from './../../../assets/icons/arror-right.svg'

export const Project = ({project,index}) => {


    return (
        <ProjectStyled>
            <div className="project">
                <img src={ project.image} className="projectImage" />
                <div className="flex overallProject">


                    <div className="projectIndex">0{index}</div>

                    <div className="projectMetadata">

                        <div className="flex titleInfo">
                            <div className="projectTitle">{project.title}</div>
                            <div className="projectTags"> {project.tags}</div>
                        </div>
                        
                        <div className="projectSummary">
                            {project.summary}
                        </div>

                        <div className="projectUrl" >
                            <a href={`/project?projectId=${project.id}`}>VIEW PROJECT &nbsp; <IconArrorRight/></a>
                        </div>

                    </div>

                </div>
               
            </div>

        </ProjectStyled>
    );
};
