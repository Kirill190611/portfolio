import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./Skill";
import {ThirdTitle} from "../../../components/titles/ThirdTitle";
import {SkillDescription} from "./SkillDescription";

export const Skills = () => {
    return (
        <section>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
                <SecondTitle title={"My Tech Stack"}/>
                <MainDescription description={"Technologies I’ve been working with recently"}/>
                <StyledSkillsContainer>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"htmlIcon"}/>
                        <SkillDescription title={"HTML5"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"cssIcon"}/>
                        <SkillDescription title={"CSS3"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"jsIcon"} viewBox={"7 7 105 105"}/>
                        <SkillDescription title={"JavaScript"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"reactIcon"} viewBox={"-2 -8 116 116"}/>
                        <SkillDescription title={"React"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"sassIcon"} viewBox={"-2 -15 120 120"}/>
                        <SkillDescription title={"SASS"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"typescriptIcon"}/>
                        <SkillDescription title={"TypeScript"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"styledcomponentsIcon"}/>
                        <SkillDescription title={"SC"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"gitIcon"} viewBox={"-8 -8 120 120"}/>
                        <SkillDescription title={"Git"}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                        <Skill iconId={"githubIcon"} viewBox={"-17 -17 120 120"}/>
                        <SkillDescription title={"GitHub"}/>
                    </FlexWrapper>
                </StyledSkillsContainer>
            </FlexWrapper>
        </section>
    );
};

const StyledSkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 120px);
    grid-auto-rows: minmax(120px, 160px);
    gap: 45px 90px;
    align-items: center;
    justify-items: center;
    margin: 0 0 38px 0;
`