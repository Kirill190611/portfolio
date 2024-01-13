import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type MainDescriptionPropsType = {
    description: string
}
export const MainDescription = (props: MainDescriptionPropsType) => {
    return (
        <StyledMainDescription>{props.description}</StyledMainDescription>
    );
};

const StyledMainDescription = styled.p`
    font-size: 32px;
    line-height: 26px;
    font-weight: 400;
    color: ${Theme.lightTheme.textColors.primary};
    margin-bottom: 35px;
    text-align: center;
    padding: 0 10px;
`