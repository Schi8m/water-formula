import styled, { keyframes } from "styled-components";
import { COLORS, ROUNDS, SIZES } from "../../variables";
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

const SLIDE_IN_TOP = keyframes`
    from {
        transform: translateY(300px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

 export const StyledMainBannerWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
   background-color: transparent;
   gap: 26px;
   box-sizing: border-box;
   margin-top: 45px;

   @media (max-width: 860px) {
      flex-direction: column;
   }
 `

 export const StyledMainBannerLeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding-block: 75px;
    gap: 50px;
    justify-content: space-between;
    /* opacity: 0; */

    /* animation: ${SLIDE_IN_TOP} .5s ease-in-out forwards; */
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

   @media (max-width: 860px) {
      font-size: 32px;
   }
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

   @media (max-width: 860px) {
      font-size: 15px;
   }
 `

 export const StyledMainBannerButtonsBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 18px;
    align-items: center;
    justify-content: space-between;

    & > button:first-child {
      box-shadow: 
         4px 4px 4px 0px #20294F40,
         4px 4px 4px 0px #E8E0E00D inset;
      background-color: ${COLORS.MAIN.PRIMARY};

      &:hover {
         background-color: #244988;
      }
    }

    & > button:last-child {
      box-shadow: 
         4px 4px 4px 0px #20294F40,
         4px 4px 4px 0px #E8E0E00D inset;
      background-color: ${COLORS.SECONDARY.PRIMARY};
      &:hover {
         background-color: #244988;
      }
    }

   @media (max-width: 860px) {
      flex-direction: column;
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
   transition: background-color .3s ease;
   cursor: pointer;

   @media (max-width: 860px) {
      width: 100%;
      min-height: 48px;
      max-height: 48px;
   }
    
 `

 export const StyledMainBannerRightBlock = styled.div`
    flex: 1;

    opacity: 0;
    animation: ${SLIDE_IN_LEFT} .5s ease-in-out forwards;
    /* background: radial-gradient(50% 50% at 50% 50%, rgba(200, 212, 236, 0.5) 0%, rgba(0,0,0,0) 100%); */
    /* backdrop-filter: blur(1000px); */
 
    &::before {
      pointer-events: none;
      content: '';
      position: absolute;
      top: -80px;
      left: -80px;
      right: -80px;
      bottom: -80px;

      z-index: -1;
      background-image: url(/backdrop_banner.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 1;
      transition: opacity .3s ease;
   }
   &:hover {
      &::before {
         opacity: .5;
      }
   }
    & > img {
        object-position: center;
        object-fit: cover;
        max-width: 100%;
    }

   @media (max-width: 860px) {
    & > img {
      width: 250px;
   }
   }
 `