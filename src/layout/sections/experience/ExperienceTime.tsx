import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

type ExperienceTimePropsType = {
    time: string
}
export const ExperienceTime = (props: ExperienceTimePropsType) => {
    return (
        <StyledExperienceTIme>{props.time}</StyledExperienceTIme>
    );
};

const StyledExperienceTIme = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 84px;
    min-height: 24px;
    font-size: 12px;
    padding: 2px 5px;
    line-height: 28px;
    font-weight: 500;
    background-color: ${Theme.lightTheme.backgroundColors.accent};
    color: ${Theme.lightTheme.textAccentColors.secondaryAccent};
    border-radius: 20px;
`