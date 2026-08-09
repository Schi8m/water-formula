import styled, { keyframes } from "styled-components";
import { COLORS, ROUNDS, SIZES } from "../../variables";

const SLIDE_IN = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

export const SyledHeaderWrapper = styled.div`
    background-color: ${COLORS.MAIN.BG};
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    gap: ${SIZES.INDENTS.EXTRA_LARGE}px;
    border-bottom: 1px solid ${COLORS.MAIN.BORDER};
    width: 100vw;
    box-sizing: border-box;

    & > svg:first-child {
        fill: ${COLORS.MAIN.TEXT_LIGHT};
        width: 60px;
    }

    & > svg:nth-child(2) {
        stroke: ${COLORS.MAIN.TEXT_LIGHT};
        width: 60px;
    }
`

export const StyledHeaderContent = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const StyledRoute = styled.button`
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
`