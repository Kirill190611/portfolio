import React from 'react';
import styled from "styled-components";
import {Slide} from "./Slide";
import {Theme} from "../../styles/Theme.styled";

export const Slider = () => {
    return (
        <StyledSlider>
            <SliderWrapper>
                <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                       author={"@Ivan Ivanon"}
                       company={"Company 1"}/>
            </SliderWrapper>
            <Pagination>
                <PaginationItem></PaginationItem>
                <PaginationItem className={"active"}></PaginationItem>
                <PaginationItem></PaginationItem>
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
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    width: 100%;
    margin-bottom: 35px;
`

const Pagination = styled.div`
    display: flex;
`

const PaginationItem = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    margin: 5px 10px;
    background-color: ${Theme.lightTheme.buttonsColor.primary};
    position: relative;
    
    &.active {
        background-color: ${Theme.lightTheme.buttonsColor.secondary};
    }
    
    &:not(:last-child)::after {
        display: block;
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: black;
        top: 50%;
        left: 100%;
    }
`