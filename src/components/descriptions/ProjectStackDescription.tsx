import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type ProjectStackDescriptionPropsType = {
    stack: string
}
export const ProjectStackDescription = (props: ProjectStackDescriptionPropsType) => {
    return (
        <StyledProjectStackDescription>
            Tech stack : <span>{props.stack}</span>
        </StyledProjectStackDescription>
    );
};

const StyledProjectStackDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: ${Theme.lightTheme.textColors.secondary};
    
    span {
        font-size: 14px;
        font-weight: 300;
    }
`