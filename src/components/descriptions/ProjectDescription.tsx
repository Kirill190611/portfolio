import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type ProjectDescriptionPropsType = {
    description: string
}
export const ProjectDescription = (props: ProjectDescriptionPropsType) => {
    return (
        <StyledProjectDescription>{props.description}</StyledProjectDescription>
    );
};

const StyledProjectDescription = styled.p`
    font-size: ${Theme.lightTheme.fontSize.secondary};
    line-height: 26px;
    font-weight: 300;
`
