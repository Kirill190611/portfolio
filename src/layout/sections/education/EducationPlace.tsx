import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

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
    font-weight: 500;
    color: ${Theme.lightTheme.textColors.lightContent};
`