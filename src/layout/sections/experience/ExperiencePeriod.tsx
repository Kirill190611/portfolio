import React from 'react';
import {S} from "./Experience_Styles";

type ExperiencePeriodPropsType = {
    period: string
}
export const ExperiencePeriod: React.FC<ExperiencePeriodPropsType> = (props: ExperiencePeriodPropsType) => {
    return (
        <S.ExperiencePeriod>{props.period}</S.ExperiencePeriod>
    );
};

