import React from 'react';
import {S} from "./Education_Styles";

type EducationLevelPropsType = {
    level: string
}
export const EducationLevel: React.FC<EducationLevelPropsType> = (props: EducationLevelPropsType) => {
    return (
        <S.EducationLevel>{props.level}</S.EducationLevel>
    );
};
