import React from 'react';
import {S} from "./ThirdTitle_Styles";

type ThirdTitlePropsType = {
    title: string
}
export const ThirdTitle: React.FC<ThirdTitlePropsType> = (props: ThirdTitlePropsType) => {
    return (
        <S.StyledThirdTitle>{props.title}</S.StyledThirdTitle>
    );
};
