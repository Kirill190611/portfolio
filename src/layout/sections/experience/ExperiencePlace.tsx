import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";

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
    color: ${Theme.lightTheme.textColors.lightContent};
`