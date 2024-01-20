import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.styled";
import {font} from "../../../../styles/Common";

type ProjectTitlePropsType = {
    title: string
}
export const ProjectTitle = (props: ProjectTitlePropsType) => {
    return (
        <StyledProjectTile>{props.title}</StyledProjectTile>
    );
};

const StyledProjectTile = styled.h4`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 28, Fmin: 20})};
    align-items: center;
    color: ${Theme.lightTheme.titleColors.secondary};
`