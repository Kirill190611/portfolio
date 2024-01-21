import React from 'react';
import {S} from "./SecondTitle_Styles";

type SecondTitlePropsType = {
    title: string
}
export const SecondTitle: React.FC<SecondTitlePropsType> = (props: SecondTitlePropsType) => {
    return (
        <S.StyledSecondTitle>{props.title}</S.StyledSecondTitle>
    );
};
