import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";


export const SyledHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    box-sizing: border-box;
    background-color: ${COLORS.MAIN.BG};
    border-bottom: 1px solid ${COLORS.MAIN.BORDER};
    position: fixed;
    top: 0;
    z-index: 10;
`

export const StyledHeaderContentWrapper = styled.div`
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    max-width: 1460px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    gap: ${SIZES.INDENTS.EXTRA_LARGE}px;
    width: 100vw;
    box-sizing: border-box;

    & > svg:first-child {
        fill: ${COLORS.MAIN.TEXT_LIGHT};
        width: 60px;
    }

    & > svg:nth-child(2) {
        stroke: ${COLORS.MAIN.TEXT_LIGHT};
        width: 60px;

        @media (max-width: 860px) {
            display: none;
        }

    }
`

export const StyledHeaderContent = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;


    @media (max-width: 860px) {
        display: none;
    }
`

export const StyledRoute = styled.a`
    border: none;
    outline: none;
    background-color: transparent;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: medium;
    line-height: 1.2;
    font-size: ${SIZES.FONTS.SMALL}px;
    letter-spacing: 0.7px;
    cursor: pointer;
    height: 80px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
        scale: 1.05;
        color: white;
    }
`

export const StyledMobileNavIcon = styled.div`
    display: none;
    @media (max-width: 860px) {
        display: block;
    }
`

export const StyledPhoneSvg = styled.div`
    @media (max-width: 860px) {
        display: none;
    }
`