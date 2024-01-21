import React from 'react';
import {S} from "./Education_Styles";

type EducationPlacePropsType = {
    place: string
}
export const EducationPlace: React.FC<EducationPlacePropsType> = (props: EducationPlacePropsType) => {
    return (
        <S.EducationPlace>{props.place}</S.EducationPlace>
    );
};
