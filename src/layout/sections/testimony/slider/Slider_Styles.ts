import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.styled";

// Slider styled

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    width: 100%;
    margin-bottom: 35px;
`

const Pagination = styled.div`
    display: flex;
`

const PaginationItem = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    margin: 5px 10px;
    background-color: ${Theme.lightTheme.buttonsColor.primary};
    position: relative;
    
    &.active {
        background-color: ${Theme.lightTheme.buttonsColor.secondary};
    }
    
    &:not(:last-child)::after {
        display: block;
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: black;
        top: 50%;
        left: 100%;
    }
`

// Slide styles


const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    min-height: 500px;
    background-color: ${Theme.lightTheme.backgroundColors.primary};
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
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

const SlideText = styled.p``

const SlideAuthor = styled.span`
    color: ${Theme.lightTheme.textColors.darkContent};
`

const SlideCompany = styled.span`
    color: ${Theme.lightTheme.textColors.darkContent}
`
export const S = {
    Slider,
    SliderWrapper,
    Pagination,
    PaginationItem,
    SlideWrapper,
    AuthorImage,
    SlideText,
    SlideAuthor,
    SlideCompany,
}