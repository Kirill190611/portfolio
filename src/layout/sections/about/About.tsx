import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {AboutDescription} from "./AboutDescription";
import {Container} from "../../../components/Container";
import {S} from "./About_Styles";
export const About: React.FC = () => {
    return (
        <Container>
            <S.StyledAbout>
                <SecondTitle title={"About Me"}/>
                <AboutDescription content={"(Need to change)The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."}/>
            </S.StyledAbout>
        </Container>
    );
};
