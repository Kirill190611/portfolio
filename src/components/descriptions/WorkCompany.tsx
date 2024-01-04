import React from 'react';
import styled from "styled-components";

type WorkCompanyPropsType = {
    company: string
}
export const WorkCompany = (props: WorkCompanyPropsType) => {
    return (
        <StyledWorkCompany>{props.company}</StyledWorkCompany>
    );
};

const StyledWorkCompany = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`