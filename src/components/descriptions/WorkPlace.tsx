import React from 'react';
import styled from "styled-components";

type WorkPlacePropsType = {
    place: string
}
export const WorkPlace = (props: WorkPlacePropsType) => {
    return (
        <StyledWorkPlace>{props.place}</StyledWorkPlace>
    );
};

const StyledWorkPlace = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`