import React from 'react';
import styled from "styled-components";

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
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(66, 68, 110, 1);
    
    span {
        font-size: 14px;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
    }
`