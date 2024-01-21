import React from 'react';
import {S} from "./About_Styles";

type AboutDescriptionPropsType = {
    content: string
}
export const AboutDescription: React.FC<AboutDescriptionPropsType> = (props: AboutDescriptionPropsType) => {
    return (
        <S.StyledAboutDescription>{props.content}</S.StyledAboutDescription>
    );
};

