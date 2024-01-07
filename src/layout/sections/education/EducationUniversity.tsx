import React from 'react';
import styled from "styled-components";

type EducationUniversityPropsType = {
    university: string
}
export const EducationUniversity = (props: EducationUniversityPropsType) => {
    return (
        <StyledEducationUniversity>{props.university}</StyledEducationUniversity>
    );
};

const StyledEducationUniversity = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`