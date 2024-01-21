import React from 'react';
import {S} from "./Footer_Styles";

type FooterMobailPropsType = {
    phone: string
    href: string
}
export const FooterMobail: React.FC<FooterMobailPropsType> = (props: FooterMobailPropsType) => {
    return (
        <S.FooterMobail href={props.href}>{props.phone}</S.FooterMobail>
    );
};

