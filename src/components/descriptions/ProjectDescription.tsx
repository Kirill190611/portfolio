import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type ProjectDescriptionPropsType = {
    description: string
}
export const ProjectDescription = (props: ProjectDescriptionPropsType) => {
    return (
        <StyledProjectDescription>{props.description}</StyledProjectDescription>
    );
};

const StyledProjectDescription = styled.p`
    ${font({family: "'Jost', sens-serif", weight: 300, Fmax: 18, Fmin: 14})};
`
