import React from 'react';
import styled from "styled-components";

type WorkPeriodPropsType = {
    period: string
}
export const WorkPeriod = (props: WorkPeriodPropsType) => {
    return (
        <StyledWorkPeriod>{props.period}</StyledWorkPeriod>
    );
};

const StyledWorkPeriod = styled.p`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`