import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";
import '@fontsource/akt';


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

export const StyledSupportInfoBlock = styled.div`
    flex: 60;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

export const StyledSupportImgBlock = styled.div`
    flex: 40;
    & > img {
        max-width: 100%;
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

export const StyledSupportCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`

export const StyledSupportCard = styled.div`
    padding: 32px;
    border-radius: 16px;
    background-color: #6B8AC633;
    border: 1px solid #C4C6CF4D;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
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

