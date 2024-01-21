import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./Skill";
import {ThirdTitle} from "../../../components/titles/thirdTitle/ThirdTitle";
import {SkillDescription} from "./SkillDescription";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <Container>
            <StyledSkills>
                <FlexWrapper direction={"column"}
                             justify={"space-between"}
                             align={"center"}>
                    <SecondTitle title={"My Tech Stack"}/>
                    <MainDescription description={"Technologies I’ve been working with recently"}/>
                    <StyledSkillsContainer>
                        <Skill iconId={"htmlIcon"}
                               title={"HTML5"}/>
                        <Skill iconId={"cssIcon"}
                               title={"CSS3"}/>
                        <Skill iconId={"jsIcon"}
                               viewBox={"7 7 105 105"}
                               title={"JavaScript"}/>
                        <Skill iconId={"reactIcon"}
                               viewBox={"-2 -8 116 116"}
                               title={"React"}/>
                        <Skill iconId={"sassIcon"}
                               viewBox={"-2 -15 120 120"}
                               title={"SASS"}/>
                        <Skill iconId={"typescriptIcon"}
                               title={"TypeScript"}/>
                        <Skill iconId={"styledcomponentsIcon"}
                               title={"SC"}/>
                        <Skill iconId={"gitIcon"}
                               viewBox={"-8 -8 120 120"}
                               title={"Git"}/>
                        <Skill iconId={"githubIcon"}
                               viewBox={"-17 -17 120 120"}
                               title={"GitHub"}/>
                    </StyledSkillsContainer>
                </FlexWrapper>
            </StyledSkills>
        </Container>
    );
};

const StyledSkills = styled.section`
    
`

const StyledSkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 120px));
    grid-auto-rows: minmax(120px, 160px);
    gap: 45px 60px;
    width: 100%;
    align-content: center;
    justify-content: center;
`