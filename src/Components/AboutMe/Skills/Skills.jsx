import React from "react";
import { SkillsStyled } from "./SkillsStyled.styled";
import { ReactComponent as IconFingerRight } from'./../../../assets/icons/finger-right.svg' 
import { FirebaseContext } from "../../../App";

export const Skills = () => {

    const FirebaseConstants = React.useContext(FirebaseContext) ;

    const renderSkills=()=>{
        if(!FirebaseConstants?.Skills) return <></>

        return FirebaseConstants.Skills.map((item,index)=>{
            return (
                <div key={index} className="flex skillsItemWrapper">

                    <div><IconFingerRight/></div>
                    <div className="flex skillListItem" >
                        <div className="skillCategory">{item.category}</div>
                        <div className="skillDescription">{item.desrciption}</div>
                    </div>

                </div>
            )

        })
    }

    return (
        <SkillsStyled>
            
            <div className="skills">
                {/* <div> { FirebaseConstants?.SkillsTitle } </div> */}
                
                {renderSkills()}

            </div>

        </SkillsStyled>
    );
};
