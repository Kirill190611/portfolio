import React from 'react';
import styled from "styled-components";

type ExperienceTimePropsType = {
    time: string
}
export const ExperienceTime = (props: ExperienceTimePropsType) => {
    return (
        <StyledExperienceTIme>{props.time}</StyledExperienceTIme>
    );
};

const StyledExperienceTIme = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`