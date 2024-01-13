import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type SecondTitlePropsType = {
    title: string
}
export const SecondTitle = (props: SecondTitlePropsType) => {
    return (
        <StyledSecondTitle>{props.title}</StyledSecondTitle>
    );
};

const StyledSecondTitle = styled.h2`
    font-size: ${Theme.lightTheme.titleFontSize.secondary};
    line-height: 52px;
    font-weight: 700;
    color: ${Theme.lightTheme.titleColors.primary};
    margin: 0 0 40px 0;
`