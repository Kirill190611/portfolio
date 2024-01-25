import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.styled";
import {font} from "../../../../styles/Common";

// Slider styled

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    min-width: 320px;
    width: 100%;
`

// Slide styles


const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    min-height: 500px;
    background-color: ${Theme.lightTheme.backgroundColors.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 20px;
`

const AuthorImage = styled.img`
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px;
    background-color: black;
`

const SlideText = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 20, Fmin: 18})};
    color: ${Theme.lightTheme.textColors.darkContent};
`

const SlideAuthor = styled.span`
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 20, Fmin: 18})};
    color: ${Theme.lightTheme.textColors.darkContent};
`

const SlideCompany = styled.span`
    ${font({family: "'Jost', sans-serif", weight: 500, Fmax: 20, Fmin: 18})};
    color: ${Theme.lightTheme.textColors.darkContent}
`
export const S = {
    SliderWrapper,
    SlideWrapper,
    AuthorImage,
    SlideText,
    SlideAuthor,
    SlideCompany,
}