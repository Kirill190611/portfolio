import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import styled from "styled-components";
import {EducationItem} from "./EducationItem";
import {Container} from "../../../components/Container";


export const Education = () => {
    return (
        <Container>
            <StyledEducation>
                <SecondTitle title={"Education"}/>
                <StyledEducationList>
                    <EducationItem title={"Mechatronics and Robotics"}
                                   university={"Bauman Moscow State Technical University"}
                                   place={"Kaluga"}
                                   level={"Bachelor Degree"}
                                   period={"Sep 2012 - Jun 2016"}/>
                    <EducationItem title={"Information Systems and Technologies"}
                                   university={"KGU K.E. Tsiolkovskogo"}
                                   place={"Kaluga"} level={"Master degree"}
                                   period={"Sep 2019 - Feb 2021"}/>
                </StyledEducationList>
            </StyledEducation>
        </Container>
    );
};

const StyledEducation = styled.section`
    padding: 25px 0;
`

const StyledEducationList = styled.ul`

`