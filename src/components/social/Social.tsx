import React from 'react';
import styled from "styled-components";

export const Social = () => {
    return (
        <StyledSocial>
            <ul>
                <li>
                    <a href={""}>VK</a>
                </li>
                <li>
                    <a href={""}>Instagram</a>
                </li>
                <li>
                    <a href={""}>Telegram</a>
                </li>
                <li>
                    <a href={""}>Github</a>
                </li>
                <li>
                    <a href={""}>LinkedIn</a>
                </li>
            </ul>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    ul {
        display: flex;
        gap: 20px;  
    }
`