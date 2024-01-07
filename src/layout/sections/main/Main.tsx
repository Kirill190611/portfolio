import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "../about/About";
import {MainTitle} from "../../../components/titles/MainTitle";
import {Experience} from "../experience/Experience";
import {Education} from "../education/Education";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contact} from "../contact/Contact";
import {Testimony} from "../testimony/Testimony";

export const Main = () => {
    return (
        <div>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <div>
                    <MainText>Hi There, <br/> I am <span>Kirill Soldatov</span></MainText>
                    <MainTitle>A Web developer.</MainTitle>
                </div>
                <Photo src={photo} alt={"It's me"}/>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} direction={"column"} gap={"40px"}>
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

