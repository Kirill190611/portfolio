import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

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
    ${font({family:"'Jost', sans-serif", weight: 400, Fmax: 16, Fmin: 14})}
    color: ${Theme.lightTheme.textColors.secondary};
    
    span {
        ${font({family:"'Jost', sans-serif", weight: 300, Fmax: 14, Fmin: 12})}
    }
`