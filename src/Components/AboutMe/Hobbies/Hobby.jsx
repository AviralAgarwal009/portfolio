import React from "react";
import { HobbyStyled } from "./HobbyStyled.styled";

export const Hobby = ({hobby}) => {

    return (
        <HobbyStyled backgroundGradient={hobby.gradient}>
            
            <div className="hobbyBubble">
                <div className="hobbyImageWrapper">
                    <img src={require(`./../../../assets/icons/${hobby.image}`)} className="hobbyImage" />
                </div>
                
                <div className="hobbyContent">{hobby.content} </div>

            </div>

        </HobbyStyled>
    );
};
