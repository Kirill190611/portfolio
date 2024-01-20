import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

type EducationLevelPropsType = {
    level: string
}
export const EducationLevel = (props: EducationLevelPropsType) => {
    return (
        <StyledEducationTIme>{props.level}</StyledEducationTIme>
    );
};

const StyledEducationTIme = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 84px;
    min-height: 24px;
    padding: 2px 5px;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 500;
    background-color: ${Theme.lightTheme.backgroundColors.accent};
    color: ${Theme.lightTheme.textAccentColors.secondaryAccent};
    border-radius: 20px;

    @media ${Theme.media.mobile} {
        margin-bottom: 0;
        order: 1;
    }
`