import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

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
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`