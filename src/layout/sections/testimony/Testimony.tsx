import React from 'react';
import styled from "styled-components";
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <Container>
            <StyledTestimony>
                <SecondTitle title={"Testimony"}/>
                <FlexWrapper justify={"center"}
                             align={"center"}>
                    <Slider/>
                </FlexWrapper>
            </StyledTestimony>
        </Container>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`