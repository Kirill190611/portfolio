import React from 'react';
import {S} from "./Experience_Styles";

type ExperiencePlacePropsType = {
    place: string
}
export const ExperiencePlace: React.FC<ExperiencePlacePropsType> = (props: ExperiencePlacePropsType) => {
    return (
        <S.ExperiencePlace>{props.place}</S.ExperiencePlace>
    );
};

