import React from 'react';
import styled from "styled-components";

type ProjectDescriptionPropsType = {
    description: string
}
export const ProjectDescription = (props: ProjectDescriptionPropsType) => {
    return (
        <StyledProjectDescription>{props.description}</StyledProjectDescription>
    );
};

const StyledProjectDescription = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    margin: 0;
`
