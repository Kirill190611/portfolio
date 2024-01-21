import React from 'react';
import {S} from "./Experience_Styles";

type ExperienceTimePropsType = {
    time: string
}
export const ExperienceTime: React.FC<ExperienceTimePropsType> = (props: ExperienceTimePropsType) => {
    return (
        <S.ExperienceTIme>{props.time}</S.ExperienceTIme>
    );
};
