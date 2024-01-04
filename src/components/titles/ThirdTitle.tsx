import React from 'react';
import styled from "styled-components";

type ThirdTitlePropsType = {
    title: string
}
export const ThirdTitle = (props: ThirdTitlePropsType) => {
    return (
        <StyledThirdTitle>{props.title}</StyledThirdTitle>
    );
};

const StyledThirdTitle = styled.h3`
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
`