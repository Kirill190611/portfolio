import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import styled from "styled-components";
import {ExperienceItem} from "./ExperienceItem";

export const Experience = () => {
    return (
        <StyledExperience>
            <SecondTitle title={"Work Experience"}/>
            <StyledExperienceList>
                <ExperienceItem title={"SQA Engineer"}
                                    company={"LG Electronics RUS"}
                                    place={"Russia, Moscow Region"}
                                    time={"Full Time"}
                                    period={"Feb 2018 - Dec 2022"}/>
                <ExperienceItem title={"SQA Leading Engineer"}
                                    company={"LG Electronics RUS"}
                                    place={"Russia, Moscow Region"}
                                    time={"Full Time"}
                                    period={"May 2022 - Dec 2022"}/>
                <ExperienceItem title={"Process Engineer"}
                                    company={"Sintec"}
                                    place={"Russia, Obninsk"}
                                    time={"Full Time"}
                                    period={"Dec 2022 - Present"}/>
            </StyledExperienceList>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    margin: 0 0 38px 0;
`
const StyledExperienceList = styled.ul`

`