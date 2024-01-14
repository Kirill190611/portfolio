import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type ThirdTitlePropsType = {
    title: string
}
export const ThirdTitle = (props: ThirdTitlePropsType) => {
    return (
        <StyledThirdTitle>{props.title}</StyledThirdTitle>
    );
};

const StyledThirdTitle = styled.h3`
    font-size: ${Theme.lightTheme.titleFontSize.experienceTitle};
    font-weight: 400;
    margin-bottom: 15px;
`