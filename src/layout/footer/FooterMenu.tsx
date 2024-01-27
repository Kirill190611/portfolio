import React from 'react';
import {S} from "./Footer_Styles";

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
export const FooterMenu: React.FC = () => {
    return (
        <S.FooterMenu>
            <S.FooterMenuList>
                {items.map((item,index)=>{
                    return <S.FooterMenuItem key={index}>
                        <S.FooterMenuLink to={item.href}
                                          smooth={true}
                                          spy={true}>
                            {item.title}
                        </S.FooterMenuLink>
                    </S.FooterMenuItem>
                })}
            </S.FooterMenuList>
        </S.FooterMenu>
    );
};
