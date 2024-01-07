import React from 'react';
import styled from "styled-components";

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
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`