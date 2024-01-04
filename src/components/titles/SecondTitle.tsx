import React from 'react';
import styled from "styled-components";

type SecondTitlePropsType = {
    title: string
}
export const SecondTitle = (props: SecondTitlePropsType) => {
    return (
        <StyledSecondTitle>{props.title}</StyledSecondTitle>
    );
};

const StyledSecondTitle = styled.h2`
    font-size: 42px;
    line-height: 52px;
    font-weight: 700;
    color: rgba(66, 68, 110, 1);
    margin: 0 0 40px 0;
    padding: 0;
`