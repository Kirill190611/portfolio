import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {Slider} from "./slider/Slider";
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <Container>
                <FlexWrapper align={"center"} direction={"column"}>
                    <SecondTitle title={"Testimony"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.Testimony>
    );
};
