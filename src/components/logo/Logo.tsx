import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Logo_Styles";

export const Logo: React.FC = () => {
    return (
        <S.LogoLink href={"#"}>
            <Icon iconId={'logoIcon'}/>
        </S.LogoLink>
    );
};
