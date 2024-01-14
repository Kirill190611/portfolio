import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.styled";

type ProjectTitlePropsType = {
    title: string
}
export const ProjectTitle = (props: ProjectTitlePropsType) => {
    return (
        <StyledProjectTile>{props.title}</StyledProjectTile>
    );
};

const StyledProjectTile = styled.h4`
    font-size: ${Theme.lightTheme.titleFontSize.projectsTitle};
    align-items: center;
    font-weight: 500;
    color: ${Theme.lightTheme.titleColors.secondary};
`