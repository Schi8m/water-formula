import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";

export const StyledDownloadBlockWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    padding-block: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
`
export const StyledDownloadBlockContent = styled.div`
    background-color: #6B8AC680;
    border-radius: 20px;
    border: 1px solid #C4C6CF66;
    padding-block: 48px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const StyledDownloadBlockSubtitle = styled.span`
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 32px;
    line-height: 35.2px;
    letter-spacing: -1.6px;
    text-align: center;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    margin-top: 32px;
    margin-bottom: 16px;
`

export const StyledDownlaodBlockDescription = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    margin-bottom: 73px;
`

export const StyledDownloadBlockButton = styled.button`
    border: none;
    outline: none;
    background-color: #20294F;
    box-shadow: 
        4px 4px 4px 0px #20294F40,
        4px 4px 4px 0px #E8E0E00D inset;
    border-radius: 12px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 1.4px;
    text-align: center;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    height: 65px;
    width: 370px;
`