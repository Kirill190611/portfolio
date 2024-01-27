import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme.styled";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"arrowGoTop"} width={"16px"} height={"15px"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: ${Theme.lightTheme.buttonsColor.secondary};
    opacity: 0.85;
`