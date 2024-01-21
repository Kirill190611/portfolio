import React from 'react';
import {Slide} from "./Slide";
import {S} from "./Slider_Styles";

const slideData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "@Ivan Ivanon",
      company: "Company 1",
    },
]

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <S.SliderWrapper>

                {slideData.map((s, index) => {
                    return <Slide text={s.text}
                                  author={s.author}
                                  company={s.company}
                                  key={index}/>
                })}

            </S.SliderWrapper>
            <S.Pagination>
                <S.PaginationItem></S.PaginationItem>
                <S.PaginationItem className={"active"}></S.PaginationItem>
                <S.PaginationItem></S.PaginationItem>
            </S.Pagination>
        </S.Slider>
    );
};
