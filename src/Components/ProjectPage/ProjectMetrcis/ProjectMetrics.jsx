import { ProjectMetricsStyled } from "./ProjectMetricsStyled.styled";



export const ProjectMetrics = ({ field,values }) => {

    const renderValues = ()=>{
        console.log(values);
        return values.map((value,index)=>{
            return (
                <div key={index}  > 
                    <p className="categoryValue">{value}</p>
                </div>
            )
        })
    }

    return (
        <ProjectMetricsStyled>
            <div className="projectMetrics">
                <div className="title">{field}</div>
                <div className="categoryValues">
                    { renderValues() }
                </div>
            </div>

        </ProjectMetricsStyled>
    );
};

