import React from 'react';
import iconsSprite from "../../assets/images/icons/icons-sprite.svg";

type SocialIconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const SocialIcon = (props: SocialIconPropsType) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>);
};

