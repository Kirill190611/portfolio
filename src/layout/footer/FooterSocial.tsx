import React from 'react';
import {SocialItem} from "../../components/social/SocialItem";
import {S} from "./Footer_Styles";

const socialData = [
    {
        iconID: "telegramSocialIcon",
        href: "#",
        width: "30",
        height: "30",
        viewBox: "0 0 21 21"
    },
    {
        iconID: "linkedinSocialIcon",
        href: "#",
        width: "30",
        height: "30",
        viewBox: "0 0 21 21"
    },
    {
        iconID: "githubSocialIcon",
        href: "#",
        width: "30",
        height: "30",
        viewBox: "-1 -1 22 22"
    },
]

export const FooterSocial: React.FC = () => {
    return (
        <S.FooterSocial>
            <S.FooterSocialList>

                {socialData.map((s,index) => {
                    return <SocialItem iconId={s.iconID}
                                       href={s.href}
                                       width={s.width}
                                       height={s.height}
                                       viewBox={s.viewBox}
                                       key={index}/>
                })}

            </S.FooterSocialList>
        </S.FooterSocial>
    );
};

