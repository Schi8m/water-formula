import styled, { css, keyframes } from "styled-components";
import { COLORS, SIZES } from "../../variables";
import '@fontsource/akt';

const SLIDE_IN_RIGHT = keyframes`
    from {
        transform: translateX(-50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

const SLIDE_IN_LEFT = keyframes`
    from {
        transform: translateX(50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const StyledSupportBlockWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 27px;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    padding-block: 48px;
    box-sizing: border-box;

   @media (max-width: 860px) {
    flex-direction: column;
   }
`

export const StyledSupportInfoBlock = styled.div.attrs<{
    animate?: boolean
}>(props => ({
    animate: props?.animate
}))`
    flex: 60;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    opacity: ${({animate}) => animate ? 1 : 0};
    transition: all .5s ease;
`

export const StyledSupportImgBlock = styled.div.attrs<{
    animate?: boolean;
}>(props => ({
    animate: props?.animate
}))`
    flex: 40;
    & > img {
        max-width: 100%;
    }
    opacity: 0;
    animation: ${({animate}) => animate ? css`${SLIDE_IN_LEFT} .5s ease-in-out .3s forwards` : 'none'};
    &::before {
      pointer-events: none;
      content: '';
      position: absolute;
      top: -100px;
      left: -100px;
      right: -100px;
      bottom: -100px;

      z-index: -1;
      background-image: url(/backdrop_card.png);
      background-position: center;
      background-size: contain;
      opacity: 1;
      transition: opacity .3s ease;
      background-repeat: no-repeat;
   }
   &:hover {
      &::before {
         opacity: .5;
      }
   }
   @media (max-width: 860px) {
    display: none;
   }
`

export const StyledSupportTitle = styled.h1`
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

   @media (max-width: 860px) {
    font-size: 32px;
   }
`

export const StyledSupportSubtitle = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.SECONDARY.TEXT_DARK};
    margin-top: 20px;

   @media (max-width: 860px) {
    font-size: 15px;
   }
`

export const StyledSupportCards = styled.div.attrs<{
    animate?: boolean
}>(props => ({
    animate: props?.animate
}))`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    margin-top: 32px;

    & > div:first-child {
        opacity: 0;
        animation: ${({animate}) => animate ? css`${SLIDE_IN_RIGHT} .5s ease-in-out .3s forwards` : 'none'};
    }

    & > div:last-child {
        opacity: 0;
        animation: ${({animate}) => animate ? css`${SLIDE_IN_RIGHT} .5s ease-in-out .6s forwards` : 'none'};
    }
`

export const StyledSupportCard = styled.div`
    padding-inline: 32px;
    padding-block: 64px;
    border-radius: 16px;
    background-color: #6B8AC633;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    cursor: pointer;
    user-select: none;
    transition: background-color .3s ease;

    box-shadow: 0px 8px 32px 0px #0000000D;
    backdrop-filter: blur(8px);

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

    &:hover {
        background-color: #6B8AC666;
    }
`

export const StyledSupportCardText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const StyledSupportCardTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-family: 'Akt', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: -0.55px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`

export const StyledSupportCardSubtitle = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.SECONDARY.TEXT_DARK};
`

