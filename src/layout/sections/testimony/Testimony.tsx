import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles";

export const Testimony: React.FC = () => {
    return (
        <Container>
            <S.Testimony>
                <SecondTitle title={"Testimony"}/>
                <FlexWrapper justify={"center"}
                             align={"center"}>
                    <Slider/>
                </FlexWrapper>
            </S.Testimony>
        </Container>
    );
};
