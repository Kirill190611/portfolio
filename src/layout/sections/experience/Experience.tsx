import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import styled from "styled-components";
import {ExperienceListItem} from "./ExperienceList";

export const Experience = () => {
    return (
        <StyledExperience>
            <SecondTitle title={"Work Experience"}/>
            <StyledExperienceList>
                <ExperienceListItem title={"SQA Engineer"}
                                    company={"LG Electronics RUS"}
                                    place={"Russia, Moscow Region"}
                                    time={"Full Time"}
                                    period={"Feb 2018 - Dec 2022"}/>
                <ExperienceListItem title={"SQA Leading Engineer"}
                                    company={"LG Electronics RUS"}
                                    place={"Russia, Moscow Region"}
                                    time={"Full Time"}
                                    period={"May 2022 - Dec 2022"}/>
                <ExperienceListItem title={"Process Engineer"}
                                    company={"Sintec"}
                                    place={"Russia, Obninsk"}
                                    time={"Full Time"}
                                    period={"Dec 2022 - Present"}/>
            </StyledExperienceList>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`

`
const StyledExperienceList = styled.ul`
    padding: 0;
    margin: 0;
`