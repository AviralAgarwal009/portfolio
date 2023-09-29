import React from "react";
import { AboutStyled } from "./AboutStyled.styled";
import { Skills } from "./Skills/Skills";
import { Hobby } from "./Hobbies/Hobby";
import { FirebaseContext } from "../../App";

export const About = () => {

    let FirebaseConstants = React.useContext(FirebaseContext);
  

    const renderHobby = ()=>{
        if(!FirebaseConstants?.Hobby) return <></>

        return FirebaseConstants?.Hobby?.map((item,index)=>{
            item.content = item.content.replace("\\n","\n");
            return (
                <div key={index}>
                    <Hobby hobby = {item} />
                </div>
            )

        })
    }

    return (
        <AboutStyled>
            
            <div className="heading">About me :-)</div>
            <div className="horizontalLine"></div>
            
            <div className="verticalDivision">

                <div className="profileSection">
                    
                    <div className="profile">

                        <div className="profilePhotoContainer">
                            <img src={ require(`./../../assets/icons/profile.jpg`)} className="profilePhoto" />
                        </div>

                        <div className="profileTagline">
                           {FirebaseConstants?.AboutMe?.tagLine}
                        </div>

                    </div>

                    <div className="profileSummary">
                        { FirebaseConstants?.AboutMe?.about }
                    </div>

                </div>

                <div className="skills">
                    <Skills/>
                </div>

            </div>

            <div className="hobby">
                {renderHobby()}
            </div>


        </AboutStyled>
    );
};
