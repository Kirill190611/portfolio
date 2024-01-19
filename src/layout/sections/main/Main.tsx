import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "../about/About";
import {Experience} from "../experience/Experience";
import {Education} from "../education/Education";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contact} from "../contact/Contact";
import {Testimony} from "../testimony/Testimony";
import {Promo} from "../promo/Promo";

export const Main = () => {
    return (
        <div>
            <FlexWrapper justify={"space-between"}
                         direction={"column"}>
                <Promo/>
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

