import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Slide} from "./Slide";
import {Theme} from "../../styles/Theme.styled";

export const Slider = () => {
    return (
        <StyledSlider>
            <SliderWrapper>
                <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                       author={"@Ivan Ivanon"}
                       company={"Company 1"}/>
                <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                       author={"@Ivan Ivanon"}
                       company={"Company 1"}/>
                <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                       author={"@Ivan Ivanon"}
                       company={"Company 1"}/>
            </SliderWrapper>
            <Pagination>
                <PaginationItem> </PaginationItem>
                <PaginationItem> </PaginationItem>
                <PaginationItem> </PaginationItem>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SliderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 0 0 35px 0;
`

const Pagination = styled.div`
    display: flex;
`

const PaginationItem = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 5px;
    background-color: ${Theme.lightTheme.buttonsColor.secondary};
`