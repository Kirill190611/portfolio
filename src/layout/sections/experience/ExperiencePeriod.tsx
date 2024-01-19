import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

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
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`