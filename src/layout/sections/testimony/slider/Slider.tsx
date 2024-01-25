import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles";
import "../../../../styles/slider.css"
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SlidePropsType = {
    text: string
    author: string
    company: string
}
const Slides = (props: SlidePropsType) => {
    return (
        <S.SlideWrapper>
            <S.AuthorImage/>
            <FlexWrapper direction={"column"}
                         justify={"space-between"}
                         align={"start"}
                         gap={"15px"}>
                <S.SlideText>{props.text}</S.SlideText>
                <S.SlideAuthor>@{props.author}</S.SlideAuthor>
                <S.SlideCompany>{props.company}</S.SlideCompany>
            </FlexWrapper>
        </S.SlideWrapper>
    );
}

const items = [
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"Ivan Ivanov"}
        company={"Company 1"}/>,
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"Petr Petrov"}
        company={"Company 2"}/>,
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"John Ivanov"}
        company={"Company 3"}/>,
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"John Ivanov"}
        company={"Company 3"}/>,
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"John Ivanov"}
        company={"Company 3"}/>,
    <Slides
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        author={"John Ivanov"}
        company={"Company 3"}/>,
];

export const Slider: React.FC = () => (
    <S.SliderWrapper>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.SliderWrapper>
);
