import React from 'react';
import styled from "styled-components";

type ExperiencePlacePropsType = {
    place: string
}
export const ExperiencePlace = (props: ExperiencePlacePropsType) => {
    return (
        <StyledExperiencePlace>{props.place}</StyledExperiencePlace>
    );
};

const StyledExperiencePlace = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`