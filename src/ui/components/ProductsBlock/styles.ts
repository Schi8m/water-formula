import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";
import '@fontsource/akt';

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

export const StyledProductsCardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;;

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
    border: 1px solid #C4C6CF66;
    background: #6B8AC633;
    max-width: 380px;

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
`