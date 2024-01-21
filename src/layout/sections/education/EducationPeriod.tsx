import React from 'react';
import {S} from "./Education_Styles";

type EducationPeriodPropsType = {
    period: string
}
export const EducationPeriod: React.FC<EducationPeriodPropsType> = (props: EducationPeriodPropsType) => {
    return (
        <S.EducationPeriod>{props.period}</S.EducationPeriod>
    );
};
