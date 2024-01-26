import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

// Experience styles

const StyledExperience = styled.section`
    position: relative;
`

const ExperienceList = styled.ul``

// Experience item styles

const StyledExperienceItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
`

const ExperienceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    
    @media ${Theme.media.tablet} {
        min-width: 250px;
    }

    @media ${Theme.media.mobile} {
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        min-width: 150px;
        min-height: 35px;
    }
`

// Experience company styles

const ExperienceCompany = styled.span`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`

// Experience place styles

const ExperiencePlace = styled.span`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`

// Experience time styles


const ExperienceTIme = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 84px;
    min-height: 24px;
    font-size: 12px;
    padding: 2px 5px;
    margin-bottom: 10px;
    font-weight: 500;
    background-color: ${Theme.lightTheme.backgroundColors.accent};
    color: ${Theme.lightTheme.textAccentColors.secondaryAccent};
    border-radius: 20px;
`

// Experience period styles

const ExperiencePeriod = styled.p`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`
export const S = {
    StyledExperience,
    ExperienceList,
    StyledExperienceItem,
    ExperienceWrapper,
    ExperienceCompany,
    ExperiencePlace,
    ExperienceTIme,
    ExperiencePeriod,
}