import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

type ExperienceCompanyCompanyPropsType = {
    company: string
}
export const ExperienceCompany = (props: ExperienceCompanyCompanyPropsType) => {
    return (
        <StyledExperienceCompany>{props.company}</StyledExperienceCompany>
    );
};

const StyledExperienceCompany = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: ${Theme.lightTheme.textColors.lightContent};
`