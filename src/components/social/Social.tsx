import React from 'react';
import styled from "styled-components";
import {SocialItem} from "./SocialItem";

export const Social = () => {
    return (
        <StyledSocial>
            <StyledSocialList>
                <SocialItem iconId={"vkSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <SocialItem iconId={"telegramSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <SocialItem iconId={"instagramSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <SocialItem iconId={"linkedinSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <SocialItem iconId={"githubSocialIcon"} href={"#"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </StyledSocialList>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    ul {
        display: flex;
        gap: 20px;  
    }
`

const StyledSocialList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`