import React from 'react';
import {ProjectImage} from "../../../../components/image/ProjectImage";
import {ProjectTitle} from "./ProjectTitle";
import {ProjectDescription} from "../../../../components/descriptions/ProjectDescription";
import {ProjectStackDescription} from "../../../../components/descriptions/ProjectStackDescription";
import {StyledButtonsProject} from "../../../../components/buttons/StyledButtonsProject";
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.styled";

type ProjectPropsType = {
    title: string
    description: string
    stack: string
    src: string
    alt: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectImage src={props.src}
                          alt={props.alt}/>
            <StyledDescriptionWrapper>
                <ProjectTitle title={props.title}/>
                <ProjectDescription description={props.description}/>
                <ProjectStackDescription stack={props.stack}/>
                <StyledButtonsWrapper>
                    <StyledButtonsProject href={"#"}>Live Preview</StyledButtonsProject>
                    <StyledButtonsProject href={"#"}>View Code</StyledButtonsProject>
                </StyledButtonsWrapper>
            </StyledDescriptionWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    background-color: ${Theme.lightTheme.backgroundColors.primary};
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 0 auto;
`
const StyledDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 25px;
`

const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5px;
`
