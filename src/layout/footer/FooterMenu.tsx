import React from 'react';
import {S} from "./Footer_Styles";

export const FooterMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.FooterMenu>
            <S.FooterMenuList>
                {props.menuItems.map((item,index)=>{
                    return <S.FooterMenuItem key={index}>
                        <S.FooterMenuLink href={"#"}>{item}</S.FooterMenuLink>
                    </S.FooterMenuItem>
                })}
            </S.FooterMenuList>
        </S.FooterMenu>
    );
};
