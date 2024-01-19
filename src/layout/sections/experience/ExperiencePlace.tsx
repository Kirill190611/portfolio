import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

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
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`