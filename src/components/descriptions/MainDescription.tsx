import React from 'react';
import styled from "styled-components";

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
    color: rgba(102, 102, 102, 1);
`