import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type SecondTitlePropsType = {
    title: string
}
export const SecondTitle = (props: SecondTitlePropsType) => {
    return (
        <StyledSecondTitle>{props.title}</StyledSecondTitle>
    );
};

const StyledSecondTitle = styled.h2`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 42, Fmin: 20})}
    color: ${Theme.lightTheme.titleColors.primary};
    margin: 0 0 40px 0;
`