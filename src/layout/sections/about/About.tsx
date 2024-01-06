import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {AboutDescription} from "../../../components/descriptions/AboutDescription";

export const About = () => {
    return (
        <section>
            <SecondTitle title={"About Me"}/>
            <AboutDescription content={"(Need to change)The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."}/>
        </section>
    );
};
