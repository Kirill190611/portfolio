import React from 'react';
import styled from "styled-components";

type ProjectTitlePropsType = {
    title: string
}
export const ProjectTitle = (props: ProjectTitlePropsType) => {
    return (
        <StyledProjectTile>{props.title}</StyledProjectTile>
    );
};

const StyledProjectTile = styled.h4`
    font-size: 28px;
    line-height: 26px;
    align-items: center;
    font-weight: 500;
    color: black;
    margin: 0;
`