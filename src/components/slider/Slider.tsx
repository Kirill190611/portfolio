import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper align={"center"}>
                <Slide>
                    <Text>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</Text>
                    <Name>@Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    max-width: 500px;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.div`
    display: flex;
    
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: yellow;
    }
`