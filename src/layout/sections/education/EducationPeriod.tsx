import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

type EducationPeriodPropsType = {
    period: string
}
export const EducationPeriod = (props: EducationPeriodPropsType) => {
    return (
        <StyledEducationPeriod>{props.period}</StyledEducationPeriod>
    );
};

const StyledEducationPeriod = styled.p`
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: ${Theme.lightTheme.textColors.lightContent};
`