import styled, { css, keyframes } from "styled-components";
import '@fontsource/akt';
import { COLORS } from "../../variables";

const SLIDE_IN_TOP = keyframes`
    from {
        transform: translateY(80%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

const GROW_POGRESS = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`
export const StyledAboutProductsCardContent = styled.div.attrs<{
    startAnimation: boolean
}>((props) => ({
    startAnimation: props?.startAnimation
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    & > div:first-child {
        animation: ${({startAnimation}) => startAnimation ? css`${SLIDE_IN_TOP} .5s ease-in-out forwards` : 'none'};
    }

    & > div:nth-child(2) {
        animation: ${({startAnimation}) => startAnimation ? css`${SLIDE_IN_TOP} .5s ease-in-out .25s forwards` : 'none'};
    }

    & > div:last-child {
        animation: ${({startAnimation}) => startAnimation ? css`${SLIDE_IN_TOP} .5s ease-in-out .5s forwards` : 'none'};
    }

    @media (max-width: 1150px) {
        flex-direction: column;
        width: 100%;
    }
`

export const StyledAboutProductCard = styled.div`
    padding: 40px;
    box-sizing: border-box;
    background-color: #6B8AC633;
    display: grid;
    grid-template-rows: 40px 72px 100px 32px;
    align-items: flex-start;
    gap: 20px;
    flex: 1;
    max-width: 400px;
    align-self: stretch;
    opacity: 0;
    box-shadow: 0px 8px 32px 0px #0000000D;
    backdrop-filter: blur(8px);
    border-radius: 20px;
    transition: all .3s ease;

    &:hover {
        background-color: #6B8AC666;
    }

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 1px; /* Толщина рамки */
        background: radial-gradient(
        circle at top left,
        rgba(255, 255, 255, 0.5),
        transparent 70%,
        rgba(255, 255, 255, 0.5) 90%,
        transparent 100%
        );
        -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

   @media (max-width: 860px) {
    width: 100%;
    max-width: none;
   }
`
export const StyledProgress = styled.div.attrs<{
    animate?: boolean
}>(props =>({
    animate: props?.animate
}))`
    width: 100%;
    height: 8px;
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        background-color: #6B8AC6;
        position: absolute;
        inset: 0;
        width: 0%;
        animation: ${({animate}) => animate ? css`${GROW_POGRESS} .7s ease 1.2s forwards` : 'none'};
    }
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

   @media (max-width: 860px) {
    font-size: 20px;
   }
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

   @media (max-width: 860px) {
    font-size: 13px;
   }
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
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin-bottom: 32px;
`   