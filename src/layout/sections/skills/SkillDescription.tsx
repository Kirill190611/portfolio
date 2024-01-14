import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

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
    font-size: ${Theme.lightTheme.fontSize.secondary};
    font-weight: 400;
`