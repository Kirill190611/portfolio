import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Logo_Styles";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <S.LogoLink onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'logoIcon'}/>
        </S.LogoLink>
    );
};
