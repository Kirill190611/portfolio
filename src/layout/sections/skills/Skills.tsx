import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {SkillsIcon} from "../../../components/icon/SkillsIcon";

export const Skills = () => {
    return (
        <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
            <SecondTitle title={"My Tech Stack"}/>
            <MainDescription description={"Technologies I’ve been working with recently"}/>
            <StyledSkillsContainer>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'htmlIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'cssIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'jsIcon'} viewBox={"0 0 120 120"}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'reactIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'sassIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'typescriptIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'styledcomponentsIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'gitIcon'}/>
                </StyledSkillsWrapper>
                <StyledSkillsWrapper>
                    <SkillsIcon iconId={'githubIcon'}/>
                </StyledSkillsWrapper>
            </StyledSkillsContainer>
        </FlexWrapper>
    );
};

const StyledSkillsContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 96px;
`

const StyledSkillsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    max-height: 120px;
`