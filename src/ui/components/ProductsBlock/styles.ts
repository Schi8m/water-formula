import styled, { css, keyframes } from "styled-components";
import { COLORS, SIZES } from "../../variables";
import '@fontsource/akt';


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

export const StyledProductsBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    box-sizing: border-box;
    gap: 60px;
    margin-bottom: 48px;
`

export const StyledProductsBlockHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const StyledProductsBlockTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -1.2px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};

   @media (max-width: 860px) {
    font-size: 32px;
   }
`

export const StyledProductsBlockSubtitle = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: ${COLORS.SECONDARY.TEXT_DARK};

   @media (max-width: 860px) {
    font-size: 15px;
   }
`

export const StyledProductsCardContent = styled.div.attrs<{
    animate: boolean
}>((props) => ({
    animate: props.animate
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    & > div:first-child {
        animation: ${({animate}) => animate ? css`${SLIDE_IN_TOP} .5s ease-in-out forwards` : 'none'};
    }

    & > div:nth-child(2) {
        animation: ${({animate}) => animate ? css`${SLIDE_IN_TOP} .5s ease-in-out .25s forwards` : 'none'};
    }

    & > div:last-child {
        animation: ${({animate}) => animate ? css`${SLIDE_IN_TOP} .5s ease-in-out .5s forwards` : 'none'};
    }

    @media (max-width: 1150px) {
        flex-direction: column;
        width: 100%;
    }
`

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px;
    box-sizing: border-box;
    border-radius: 20px;
    background: #6B8AC633;
    max-width: 400px;
    transition: all .3s ease;
    position: relative;
    box-shadow: 0px 8px 32px 0px #0000000D;
    backdrop-filter: blur(8px);
    opacity: 0;

    &:hover {
        background-color: #6B8AC640;
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
        cursor: pointer;
    }

    &:nth-child(2) {
        cursor: pointer;
        background-color: #6B8AC680;
        &::before {
            pointer-events: none;
            cursor: pointer;
            content: '';
            position: absolute;
            inset: 0; 
            border-radius: 20px;
            background: radial-gradient(50% 50% at 50% 50%, rgba(200, 212, 236, 0.4) 0%, rgba(107, 138, 198, 0.4) 100%);
            backdrop-filter: blur(200px);
            z-index: -1;
        }

        &::after {
            cursor: pointer;
            content: 'РЕКОМЕНДУЕМ';
            position: absolute;
            top: 0;
            right: 0;
            background-color: #20294F;
            padding-inline: 25px;
            padding-block: 8px;
            color: #fff;
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 500;
            font-style: Medium;
            font-size: 11px;
            line-height: 13.2px;
            letter-spacing: 1.1px;
            vertical-align: middle;
            border-top-right-radius: 18px;
            border-bottom-left-radius: 18px;

        }

        &:hover {
            box-shadow: 0 0 70px 1px rgba(255, 255, 255, 0.3);
        }

        & button {
            background-color: #20294F;
            box-shadow: 
                4px 4px 4px 0px #20294F40,
                4px 4px 4px 0px #E8E0E00D inset;
                
            &:hover {
                background-color: #244988;
            }
        }
    }

    @media (max-width: 1150px) {
        max-width: 100%;
        width: 100%;
        flex: 1;
    }
`

export const StyledProductCardTitle = styled.h2`
    margin: 0;
    padding: 0;
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 32px;
    line-height: 35.2px;
    letter-spacing: -1.6px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    margin-bottom: 40px;

   @media (max-width: 860px) {
    font-size: 20px;
   }
`

export const StyledProductCardCost = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    margin-bottom: 56px;
    gap: 10px;
`

export const StyledProductCardCostTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 50px;
    line-height: 48px;
    letter-spacing: -4px;
    vertical-align: middle;
    white-space: nowrap;
`

export const StyledProductCardCostDescription = styled.span`
    white-space: nowrap;
    font-family: 'Roboto Condensed', sans-serif;
`

export const StyledFunctionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 70px;
`

export const StyledProductFunction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;

    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 0.7px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    padding-block: 8px;

    & > svg {
        min-width: 17px;
        max-width: 17px;
        min-height: 17px;
        max-height: 17px;
    }
`

export const StyledProductCardLinkBtn = styled.button`
    height: 65px;
    width: 100%;
    border: none;
    outline: none;
    background: #6B8AC633;
    box-shadow: 
        4px 4px 4px 0px #20294F40,
        4px 4px 4px 0px #E8E0E00D inset;

    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 1.4px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border-radius: 12px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background-color: #244988;
    }
`