import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import styled from "styled-components";
import photo1 from "../../../assets/images/project-images/project-1.webp";
import photo2 from "../../../assets/images/project-images/project-2.webp";
import photo3 from "../../../assets/images/project-images/project-3.webp";
import photo4 from "../../../assets/images/project-images/project-4.webp";
import photo5 from "../../../assets/images/project-images/project-5.webp";
import photo6 from "../../../assets/images/project-images/project-6.webp";
import {ProjectImage} from "../../../components/image/ProjectImage";
import {ProjectTitle} from "../../../components/titles/ProjectTitle";
import {ProjectDescription} from "../../../components/descriptions/ProjectDescription";
import {ProjectStackDescription} from "../../../components/descriptions/ProjectStackDescription";
import {StyledButtonsProject} from "../../../components/buttons/StyledButtonsProject";

export const Projects = () => {
    return (
        <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
            <SecondTitle title={"Projects"}/>
            <MainDescription description={"Things I’ve built so far"}/>
            <StyledProjectsContainer>
                <StyledProjectWrapper>
                    <ProjectImage src={photo1} alt={"Project 1"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 1"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"HTML , JavaScript, TS, React"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
                <StyledProjectWrapper>
                    <ProjectImage src={photo2} alt={"Project 2"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 2"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"HTML , JavaScript, TS, React"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
                <StyledProjectWrapper>
                    <ProjectImage src={photo3} alt={"Project 3"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 3"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"HTML , JavaScript, TS, React"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
                <StyledProjectWrapper>
                    <ProjectImage src={photo4} alt={"Project 4"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 4"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"HTML , JavaScript, TS, React"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
                <StyledProjectWrapper>
                    <ProjectImage src={photo5} alt={"Project 5"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 5"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"TS, React"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
                <StyledProjectWrapper>
                    <ProjectImage src={photo6} alt={"Project 6"}/>
                    <StyledDescriptionWrapper>
                        <ProjectTitle title={"Project 6"}/>
                        <ProjectDescription description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <ProjectStackDescription stack={"HTML , JavaScript, TS, React, Redux"}/>
                        <StyledButtonsWrapper>
                            <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                            <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                        </StyledButtonsWrapper>
                    </StyledDescriptionWrapper>
                </StyledProjectWrapper>
            </StyledProjectsContainer>
        </FlexWrapper>
    );
};

const StyledProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;
    gap: 62px 34px;
`

const StyledProjectWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    width: 375px;
    min-height: 570px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`

const StyledDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 15px;
    width: 100%;
    padding: 30px 28px;
    box-sizing: border-box;
`

const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`