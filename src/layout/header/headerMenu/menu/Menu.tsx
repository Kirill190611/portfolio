import React from 'react';
import {S} from "../HeaderMenu_Styles"

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "TechStack",
        href: "tech",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contact",
        href: "contact",
    },
]

export const Menu: React.FC = () => {
    return (
        <S.MenuList>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.MenuLink activeClass={"active"}
                                to={item.href}
                                smooth={true}
                                spy={true}>
                        {item.title}
                    </S.MenuLink>
                </S.MenuItem>
            })}
        </S.MenuList>
    );
};
