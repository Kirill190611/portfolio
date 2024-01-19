import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {AboutDescription} from "../../../components/descriptions/AboutDescription";
import styled from "styled-components";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <Container>
            <StyledAbout>
                <SecondTitle title={"About Me"}/>
                <AboutDescription content={"(Need to change)The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."}/>
            </StyledAbout>
        </Container>
    );
};

const StyledAbout = styled.section`
    padding: 25px 0;
`