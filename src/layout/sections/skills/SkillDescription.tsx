import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

type SkillDescriptionropsType = {
    title: string
}
export const SkillDescription = (props: SkillDescriptionropsType) => {
    return (
        <StyledSkillDescription>{props.title}</StyledSkillDescription>
    );
};

const StyledSkillDescription = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 14})};
`