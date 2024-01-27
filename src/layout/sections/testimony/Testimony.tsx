import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {Slider} from "./slider/Slider";
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";

export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <Fade damping={0.2}>
                <Container>
                    <FlexWrapper align={"center"} direction={"column"}>
                        <SecondTitle title={"Testimony"}/>
                        <Slider/>
                    </FlexWrapper>
                </Container>
            </Fade>
        </S.Testimony>
    );
};
