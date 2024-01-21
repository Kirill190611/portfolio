import React from 'react';
import {S} from "./Education_Styles";

type EducationUniversityPropsType = {
    university: string
}
export const EducationUniversity: React.FC<EducationUniversityPropsType> = (props: EducationUniversityPropsType) => {
    return (
        <S.EducationUniversity>{props.university}</S.EducationUniversity>
    );
};

