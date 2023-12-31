import { ProjectDetailsStyled } from "./ProjectDetailsStyled.styled";
import { ProjectMetrics } from "../ProjectMetrcis/ProjectMetrics";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";

export const ProjectDetails = ({ projectInfo }) => {


    const renderProjectMetrics = ()=>{


        let elements =  Object.keys(projectInfo.metrics).map((keyName, i) => {

            let projectMetrics = projectInfo.metrics[keyName];
            //sort project metrics based on order


            return (
                <div key={i}>
                    <ProjectMetrics field = {projectMetrics.title} values = {projectMetrics.values} />
                </div>
            )
        })

        return elements;
    }

    return (
        <ProjectDetailsStyled>

            <div className="projectMain">
                <div className="title">{projectInfo.title}</div>

                <div className="horizontalLine"></div>

                <div className="verticalDivision">
                    <div className="projectSummary">
                        <p className="projectInfo">{projectInfo.bigSummary}</p>
                    </div>

                    <div className="projectMetrics">
                        
                        {renderProjectMetrics()}

                    </div>

                </div>


                {
                        projectInfo.image?(
                            Array.isArray(projectInfo.image)?(
                                <div className="projectImage">
                                    <ImageCarousel image={projectInfo.image} />
                                </div>
                            ):
                            <div className="projectImage">
                                <img  className="projectImageTag" src={projectInfo.image } />
                            </div>
                        ):null
                }

                <div className="projectImpact">

                    <div className="horizontalLine"></div>
                    <div className="impactTitle">The Impact</div>
                    <div className="impactDescription"><p className="projectInfo">{projectInfo.impact}</p></div>
                </div>



            </div>

        </ProjectDetailsStyled>
    );
};

