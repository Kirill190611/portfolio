import React from 'react';
import {S} from "./Experience_Styles";

type ExperienceCompanyCompanyPropsType = {
    company: string
}
export const ExperienceCompany: React.FC<ExperienceCompanyCompanyPropsType> = (props: ExperienceCompanyCompanyPropsType) => {
    return (
        <S.ExperienceCompany>{props.company}</S.ExperienceCompany>
    );
};
