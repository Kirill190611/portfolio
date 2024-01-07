import React from 'react';
import styled from "styled-components";

type EducationLevelPropsType = {
    level: string
}
export const EducationLevel = (props: EducationLevelPropsType) => {
    return (
        <StyledEducationTIme>{props.level}</StyledEducationTIme>
    );
};

const StyledEducationTIme = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`