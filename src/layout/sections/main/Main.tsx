import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <FlexWrapper justify={"space-between"} align={"center"}>
            <div>
                <MainText>Hi There, <br/> I am <span>Kirill Soldatov</span></MainText>
                <MainTitle>A Web developer.</MainTitle>
            </div>

            <Photo src={photo} alt={"It's me"}/>
        </FlexWrapper>
    );
};

const Photo = styled.img`
    display: block;
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 175px;
    border: 9px solid #4800fd;
`

const MainText = styled.p`
    color: rgba(66, 68, 110, 1);
    font-size: 58px;
    line-height: 70px;
    font-weight: 700;
    
    span {
        color: #4800fd;
    }
`

const MainTitle = styled.h1`
    color: rgba(66, 68, 110, 1);
    font-size: 58px;
    line-height: 70px;
    font-weight: 700;
`