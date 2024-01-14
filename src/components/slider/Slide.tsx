import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../FlexWrapper";

type SlidePropsType = {
    text: string
    author: string
    company: string
}
export const Slide = (props: SlidePropsType) => {
    return (
        <SlideWrapper>
            <AuthorImage></AuthorImage>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"start"} gap={"15px"}>
                <SlideText>{props.text}</SlideText>
                <SlideAuthor>{props.author}</SlideAuthor>
                <SlideCompany>{props.company}</SlideCompany>
            </FlexWrapper>
        </SlideWrapper>
    );
};

const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    min-height: 500px;
    background-color: ${Theme.lightTheme.backgroundColors.primary};
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
`

const AuthorImage = styled.img`
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px;
    background-color: black;
`

const SlideText = styled.p`

`

const SlideAuthor = styled.span`
    color: ${Theme.lightTheme.textColors.darkContent};
`

const SlideCompany = styled.span`
    color: ${Theme.lightTheme.textColors.darkContent}
`