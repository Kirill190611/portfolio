import React from 'react';
import styled from "styled-components";

type WorkTimePropsType = {
    time: string
}
export const WorkTime = (props: WorkTimePropsType) => {
    return (
        <StyledWorkTIme>{props.time}</StyledWorkTIme>
    );
};

const StyledWorkTIme = styled.span`
    display: block;
    font-size: 12px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(167, 167, 167, 1);
`