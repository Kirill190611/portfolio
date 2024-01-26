import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

// Education styles

const StyledEducation = styled.section`
    position: relative;
`

const EducationList = styled.ul``

// Education item styles

const EducationItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    @media ${Theme.media.mobile} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        min-height: 100px;
    }
`

const EducationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    
    @media ${Theme.media.tablet} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        min-height: 35px;
    }
`

const EducationInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    
    @media ${Theme.media.mobile} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`

// Education university styles

const EducationUniversity = styled.span`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`

// Education place styles

const EducationPlace = styled.span`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`

// Education level styles

const EducationLevel = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 84px;
    min-height: 24px;
    padding: 2px 5px;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 500;
    background-color: ${Theme.lightTheme.backgroundColors.accent};
    color: ${Theme.lightTheme.textAccentColors.secondaryAccent};
    border-radius: 20px;

    @media ${Theme.media.mobile} {
        margin-bottom: 0;
        order: 1;
        
    }
`

// Education period styles

const EducationPeriod = styled.p`
    display: block;
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 12, Fmin: 10})};
    color: ${Theme.lightTheme.textColors.lightContent};
`

export const S = {
    StyledEducation,
    EducationList,
    EducationItem,
    EducationWrapper,
    EducationInfo,
    EducationUniversity,
    EducationPlace,
    EducationLevel,
    EducationPeriod,
}