import React from 'react';
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {EducationItem} from "./EducationItem";
import {Container} from "../../../components/Container";
import {S} from "./Education_Styles";

const educationData = [
    {
        title: "Mechatronics and Robotics",
        university: "Bauman Moscow State Technical University",
        place: "Kaluga",
        level: "Bachelor Degree",
        period: "Sep 2012 - Jun 2016",
    },
    {
        title: "Information Systems and Technologies",
        university: "KGU K.E. Tsiolkovskogo",
        place: "Kaluga",
        level: "Master degree",
        period: "Sep 2019 - Feb 2021",
    },
]

export const Education: React.FC = () => {
    return (
        <Container>
            <S.StyledEducation>
                <SecondTitle title={"Education"}/>
                <S.EducationList>

                    {educationData.map((e, index) => {
                        return <EducationItem title={e.title}
                                              university={e.university}
                                              place={e.place}
                                              level={e.level}
                                              period={e.period}
                                              key={index}/>
                    })}

                </S.EducationList>
            </S.StyledEducation>
        </Container>
    );
};
