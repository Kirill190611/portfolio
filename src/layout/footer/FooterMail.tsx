import React from 'react';
import {S} from "./Footer_Styles";

type FooterMailPropsType = {
    mail: string
    href: string
}
export const FooterMail: React.FC<FooterMailPropsType> = (props: FooterMailPropsType) => {
    return (
        <S.FooterMail href={props.href}>{props.mail}</S.FooterMail>
    );
};

