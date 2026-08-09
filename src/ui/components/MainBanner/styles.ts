import styled from "styled-components";
import { COLORS, ROUNDS, SIZES } from "../../variables";
import '@fontsource/akt';

 export const StyledMainBannerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    background-color: transparent;
    gap: 26px;
    box-sizing: border-box;
 `

 export const StyledMainBannerLeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding-block: 75px;
    gap: 50px;
    justify-content: space-between;
 `

 export const StyledMainBannerTitle = styled.h1`
    margin: 0;
    padding: 0;

    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -1.2px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
 `

 export const StyledMainBannerSubtitle = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    line-height: 29.25px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.SECONDARY.TEXT_DARK};
 `

 export const StyledMainBannerButtonsBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 18px;
    align-items: center;
    justify-content: space-between;

    & > button:first-child {
        box-shadow: 4px 4px 4px 0px #20294F40;
        box-shadow: 4px 4px 4px 0px #E8E0E00D inset;
        background-color: ${COLORS.MAIN.PRIMARY};
    }

    & > button:last-child {
        box-shadow: 4px 4px 4px 0px #20294F40;
        box-shadow: 4px 4px 4px 0px #E8E0E00D inset;
        background-color: ${COLORS.SECONDARY.PRIMARY};
    }
 `

 export const StyledMainBannerButton = styled.button`
    flex: 1;
    border: none;
    outline: none;
    height: 65px;
    border-radius: ${ROUNDS.ROUNDS.LARGE}px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 1.4px;
    text-align: center;
    vertical-align: middle;
    color: #FFF;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
 `

 export const StyledMainBannerRightBlock = styled.div`
    flex: 1;

    & > img {
        object-position: center;
        object-fit: cover;
        max-width: 100%;
    }
 `