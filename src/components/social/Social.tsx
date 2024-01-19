import React from 'react';
import styled from "styled-components";
import {SocialItem} from "./SocialItem";
import {Theme} from "../../styles/Theme.styled";

export const Social = () => {
    return (
        <StyledSocial>
            <StyledSocialList>
                {/*<SocialItem iconId={"vkSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 21 21"}/>*/}
                <SocialItem iconId={"telegramSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 21 21"}/>
                {/*<SocialItem iconId={"instagramSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 21 21"}/>*/}
                <SocialItem iconId={"linkedinSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 21 21"}/>
                <SocialItem iconId={"githubSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"-1 -1 22 22"}/>
            </StyledSocialList>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`

const StyledSocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`