import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "../about/About";
import {MainTitle} from "../../../components/titles/MainTitle";
import {Experience} from "../experience/Experience";
import {Education} from "../education/Education";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contact} from "../contact/Contact";
import {Testimony} from "../testimony/Testimony";
import {Theme} from "../../../styles/Theme.styled";

export const Main = () => {
    return (
        <div>
            <FlexWrapper justify={"space-between"} align={"center"} height={"50vh"} margin={"50px 0"}>
                <TextContainer>
                    <MainText>Hi There, <br/> I am <AccentText>Kirill Soldatov</AccentText></MainText>
                    <MainTitle>A Web developer.</MainTitle>
                </TextContainer>
                <PhotoWrapper>
                    <Photo src={photo} alt={"It's me"}/>
                </PhotoWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} direction={"column"}>
                <About/>
                <Experience/>
                <Education/>
                <Skills/>
                <Projects/>
                <Testimony/>
                <Contact/>
            </FlexWrapper>
        </div>
    );

};

const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    background: linear-gradient(#E70FAA, #00C0FD);
    border-radius: 50%;
`

const Photo = styled.img`
    display: block;
    width: 330px;
    height: 330px;
    object-fit: cover;
    border-radius: 50%;
`

const MainText = styled.p`
    color: ${Theme.lightTheme.textColors.secondary};
    font-size: ${Theme.lightTheme.titleFontSize.primary};
    font-weight: 700;
    margin-bottom: 10px;
`

const AccentText = styled.span`
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`

const TextContainer = styled.div`

`

