import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

type ExperiencePeriodPropsType = {
    period: string
}
export const ExperiencePeriod = (props: ExperiencePeriodPropsType) => {
    return (
        <StyledExperiencePeriod>{props.period}</StyledExperiencePeriod>
    );
};

const StyledExperiencePeriod = styled.p`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: ${Theme.lightTheme.textColors.lightContent};
`