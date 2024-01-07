import React from 'react';
import styled from "styled-components";

type EducationPlacePropsType = {
    place: string
}
export const EducationPlace = (props: EducationPlacePropsType) => {
    return (
        <StyledEducationPlace>{props.place}</StyledEducationPlace>
    );
};

const StyledEducationPlace = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`