import React from 'react';
import styled from "styled-components";
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SecondTitle title={"Testimony"}/>
            <FlexWrapper justify={"center"} align={"center"}>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 38px 0;
`