import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

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
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`