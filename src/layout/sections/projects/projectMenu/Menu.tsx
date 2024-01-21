import React from 'react';
import {S} from "./Menu_Styles";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.Menu>
            <S.MenuList>
                {props.menuItems.map((item,index)=>{
                    return <S.MenuItem key={index}>
                        <S.MenuLink href={"#"}>{item}</S.MenuLink>
                    </S.MenuItem>
                })}
            </S.MenuList>
        </S.Menu>
    );
};
