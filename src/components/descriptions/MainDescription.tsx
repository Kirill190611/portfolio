import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type MainDescriptionPropsType = {
    description: string
}
export const MainDescription = (props: MainDescriptionPropsType) => {
    return (
        <StyledMainDescription>{props.description}</StyledMainDescription>
    );
};

const StyledMainDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 32, Fmin: 24})};
    color: ${Theme.lightTheme.textColors.primary};
    margin-bottom: 25px;
    text-align: center;
    padding: 0 10px;
    
    @media ${Theme.media.tablet} {
        margin-bottom: 20px;
    }

    @media ${Theme.media.mobile} {
        margin-bottom: 15px;
    }
`