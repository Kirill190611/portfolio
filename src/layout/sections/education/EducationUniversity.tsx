import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

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
    font-weight: 500;
    color: ${Theme.lightTheme.textColors.lightContent};
`