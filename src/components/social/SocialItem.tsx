import React from 'react';
import {SocialIcon} from "./SocialIcon";
import {S} from "./Social_Styles";

type SocialItemPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
    href: string
}
export const SocialItem: React.FC<SocialItemPropsType> = (props: SocialItemPropsType) => {
    return (
        <S.SocialItem>
            <S.SocialLink href={props.href}>
                <SocialIcon iconId={props.iconId}
                            viewBox={props.viewBox}
                            width={props.width}
                            height={props.height}/>
            </S.SocialLink>
        </S.SocialItem>
    );
};
