import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "./Slider_Styles";

type SlidePropsType = {
    text: string
    author: string
    company: string
}
export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
    return (
        <S.SlideWrapper>
            <S.AuthorImage/>
            <FlexWrapper direction={"column"}
                         justify={"space-between"}
                         align={"start"}
                         gap={"15px"}>
                <S.SlideText>{props.text}</S.SlideText>
                <S.SlideAuthor>{props.author}</S.SlideAuthor>
                <S.SlideCompany>{props.company}</S.SlideCompany>
            </FlexWrapper>
        </S.SlideWrapper>
    );
};
