import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";

const skillsData = [
    {
        iconID: "htmlIcon",
        title: "HTML5",
        viewBox: "0 0 120 120",
    },
    {
        iconID: "cssIcon",
        title: "CSS3",
        viewBox: "0 0 120 120"
    },
    {
        iconID: "jsIcon",
        title: "JavaScript",
        viewBox: "7 7 105 105",
    },
    {
        iconID: "reactIcon",
        title: "React",
        viewBox: "-2 -8 116 116",
    },
    {
        iconID: "sassIcon",
        title: "SASS",
        viewBox: "-2 -15 120 120",
    },
    {
        iconID: "typescriptIcon",
        title: "TypeScript",
        viewBox: "0 0 120 120"
    },
    {
        iconID: "styledcomponentsIcon",
        title: "SC",
        viewBox: "0 0 120 120",
    },
    {
        iconID: "gitIcon",
        title: "Git",
        viewBox: "-8 -8 120 120",
    },
    {
        iconID: "githubIcon",
        title: "GitHub",
        viewBox: "-17 -17 120 120",
    },
]

export const Skills: React.FC = () => {
    return (
        <S.StyledSkills id={"tech"}>
            <Container>
                <FlexWrapper direction={"column"}
                             justify={"space-between"}
                             align={"center"}>
                    <SecondTitle title={"My Tech Stack"}/>
                    <MainDescription description={"Technologies I’ve been working with recently"}/>
                    <S.SkillsContainer>
                        <Fade cascade={true} damping={0.07}>
                            {skillsData.map((s, index) => {
                                return <Skill iconId={s.iconID}
                                              title={s.title}
                                              viewBox={s.viewBox}
                                              key={index}/>
                            })}
                        </Fade>
                    </S.SkillsContainer>
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};
