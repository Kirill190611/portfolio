import React from 'react';
import {S} from "./ThirdTitle_Styles";

type ThirdTitlePropsType = {
    title: string
}
export const ThirdTitle = (props: ThirdTitlePropsType) => {
    return (
        <S.StyledThirdTitle>{props.title}</S.StyledThirdTitle>
    );
};
