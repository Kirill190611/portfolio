import React from 'react';
import {S} from "./Description_Styles";

type MainDescriptionPropsType = {
    description: string
}
export const MainDescription: React.FC<MainDescriptionPropsType> = (props: MainDescriptionPropsType) => {
    return (
        <S.StyledMainDescription>{props.description}</S.StyledMainDescription>
    );
};
