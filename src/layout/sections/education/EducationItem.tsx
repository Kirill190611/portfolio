import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/thirdTitle/ThirdTitle";
import {EducationUniversity} from "./EducationUniversity";
import {EducationPlace} from "./EducationPlace";
import {EducationLevel} from "./EducationLevel";
import {EducationPeriod} from "./EducationPeriod";
import {S} from "./Education_Styles";

type EducationItemPropsType = {
    title: string
    university: string
    place: string
    level: string
    period: string
}

export const EducationItem: React.FC<EducationItemPropsType> = (props: EducationItemPropsType) => {
    return (
        <S.EducationItem>
            <FlexWrapper justify={"space-between"}
                         direction={"column"}>
                <ThirdTitle title={props.title}/>
                <S.EducationWrapper>
                    <EducationUniversity university={props.university}/>
                    <EducationPlace place={props.place}/>
                </S.EducationWrapper>
            </FlexWrapper>
            <S.EducationInfo>
                <EducationLevel level={props.level}/>
                <EducationPeriod period={props.period}/>
            </S.EducationInfo>
        </S.EducationItem>
    );
};
