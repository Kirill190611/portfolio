import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/thirdTitle/ThirdTitle";
import {ExperienceCompany} from "./ExperienceCompany";
import {ExperiencePlace} from "./ExperiencePlace";
import {ExperienceTime} from "./ExperienceTime";
import {ExperiencePeriod} from "./ExperiencePeriod";
import {S} from "./Experience_Styles";

type ExperienceItemPropsType = {
    title: string
    company: string
    place: string
    time: string
    period: string
}
export const ExperienceItem: React.FC<ExperienceItemPropsType> = (props: ExperienceItemPropsType) => {
    return (
        <S.StyledExperienceItem>
            <FlexWrapper justify={"space-between"}
                         direction={"column"}>
                <ThirdTitle title={props.title}/>
                <S.ExperienceWrapper>
                    <ExperienceCompany company={props.company}/>
                    <ExperiencePlace place={props.place}/>
                </S.ExperienceWrapper>
            </FlexWrapper>
                <FlexWrapper justify={"space-between"}
                             align={"end"}
                             direction={"column"}
                             gap={"10px"}>
                    <ExperienceTime time={props.time}/>
                    <ExperiencePeriod period={props.period}/>
                </FlexWrapper>
        </S.StyledExperienceItem>
    );
};
