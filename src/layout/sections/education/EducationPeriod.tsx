import React from 'react';
import styled from "styled-components";

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
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`