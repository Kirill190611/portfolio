import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type ThirdTitlePropsType = {
    title: string
}
export const ThirdTitle = (props: ThirdTitlePropsType) => {
    return (
        <StyledThirdTitle>{props.title}</StyledThirdTitle>
    );
};

const StyledThirdTitle = styled.h3`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 20, Fmin: 16})}
    margin-bottom: 15px;
`