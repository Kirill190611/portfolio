import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <section>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
                <SecondTitle title={"My Tech Stack"}/>
                <MainDescription description={"Technologies I’ve been working with recently"}/>
                <StyledSkillsContainer>
                    <Skill iconId={"htmlIcon"}/>
                    <Skill iconId={"cssIcon"}/>
                    <Skill iconId={"jsIcon"} viewBox={"7 7 105 105"}/>
                    <Skill iconId={"reactIcon"}/>
                    <Skill iconId={"sassIcon"}/>
                    <Skill iconId={"typescriptIcon"}/>
                    <Skill iconId={"styledcomponentsIcon"}/>
                    <Skill iconId={"gitIcon"}/>
                    <Skill iconId={"githubIcon"}/>
                </StyledSkillsContainer>
            </FlexWrapper>
        </section>
    );
};

const StyledSkillsContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 96px;
`
