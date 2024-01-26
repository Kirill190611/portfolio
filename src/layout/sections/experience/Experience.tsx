import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {ExperienceItem} from "./ExperienceItem";
import {Container} from "../../../components/Container";
import {S} from "./Experience_Styles";

const experienceData = [
    {
        title: "SQA Engineer",
        company: "LG Electronics RUS",
        place: "Russia, Moscow Region",
        time: "Full Time",
        period: "Feb 2018 - Dec 2022",
    },
    {
        title: "SQA Leading Engineer",
        company: "LG Electronics RUS",
        place: "Russia, Moscow Region",
        time: "Full Time",
        period: "May 2022 - Dec 2022",
    },
    {
        title: "Process Engineer",
        company: "Sintec",
        place: "Russia, Obninsk",
        time: "Full Time",
        period: "Dec 2022 - Present",
    },
]
export const Experience: React.FC = () => {
    return (
        <S.StyledExperience>
            <Container>
                <SecondTitle title={"Work Experience"}/>
                <S.ExperienceList>

                    {experienceData.map((e, index) => {
                        return <ExperienceItem title={e.title}
                                               company={e.company}
                                               place={e.place}
                                               time={e.time}
                                               period={e.period}
                                               key={index}/>
                    })}

                </S.ExperienceList>
            </Container>
        </S.StyledExperience>
    );
};
