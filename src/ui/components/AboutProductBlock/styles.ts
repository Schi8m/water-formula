import styled from "styled-components";
import '@fontsource/akt';
import { COLORS } from "../../variables";

export const StyledAboutProductCard = styled.div`
    padding: 40px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #6B8AC633;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1;
    max-width: 380px;
    align-self: stretch;
`

export const StyledProductIcon = styled.div`
    & > svg {
        min-width: 32px;
        max-width: 32px;
    }
`

export const StyledAboutProductCardTitle = styled.h2`
    margin: 0;
    padding: 0;

    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 32px;
    line-height: 35.2px;
    letter-spacing: -1.6px;
    vertical-align: middle;
    margin-top: 36px;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`

export const StyledAboutProductCardSubtitle = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.SECONDARY.TEXT_DARK};
`

export const StyledAboutProductCardLink = styled.a`
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 0.7px;
    vertical-align: middle;
    color: #6B8AC6;
    margin-top: 12px;
    display: flex;
    gap: 8px;
`   