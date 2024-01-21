import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

// Projects styles

const StyledProjects = styled.section``

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: minmax(480px, 540px);
    gap: 20px 10px;
    width: 100%;
    align-content: center;
    justify-content: center;
`

// Project styles

const Project = styled.div`
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

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 25px;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5px;
`

// Project title styles

const ProjectTile = styled.h4`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 28, Fmin: 20})};
    align-items: center;
    color: ${Theme.lightTheme.titleColors.secondary};
`

// Project description styles


const ProjectDescription = styled.p`
    ${font({family: "'Jost', sens-serif", weight: 500, Fmax: 18, Fmin: 16})};
`

// Project stack description styles

const ProjectStackDescription = styled.p`
    ${font({family:"'Jost', sans-serif", weight: 400, Fmax: 16, Fmin: 14})}
    color: ${Theme.lightTheme.textColors.secondary};
    
    span {
        ${font({family:"'Jost', sans-serif", weight: 300, Fmax: 14, Fmin: 12})}
    }
`

// Buttons project styles

const ButtonsProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 16, Fmin: 15})};
    color: ${Theme.lightTheme.buttonsColor.primary};
`

// Image project styles

const ProjectImage = styled.img`
    display: block;
    width: 100%;
    max-height: 260px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`
export const S = {
    StyledProjects,
    ProjectsContainer,
    Project,
    DescriptionWrapper,
    ButtonsWrapper,
    ProjectTile,
    ProjectDescription,
    ProjectStackDescription,
    ButtonsProject,
    ProjectImage,
}