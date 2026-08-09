import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";
import '@fontsource/akt';

export const StyledAboutDeveloperWrapper = styled.div`
    width: 100%;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 48px;
`

export const StyledAboutDeveloperContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background-color: #6B8AC680;
    border-radius: 16px;
    border: 1px solid #2C3E5026;
    padding: 48px;
    box-sizing: border-box;
`

export const StyledAboutDeveloperTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -1.2px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`

export const StyledAboutDeveloperPartsBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 46px;
    padding-block: 16px;
    align-items: flex-start;
`

export const StyledAboutDeveloperPart = styled.span`
    flex: 1;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`