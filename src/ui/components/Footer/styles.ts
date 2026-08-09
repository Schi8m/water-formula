import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";

export const StyledFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    padding-inline: ${SIZES.INDENTS.DESKTOP_PADDINGS}px;
    padding-block: 48px;
    gap: 64px;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #080E26;
    border-top: 1px solid #C4C6CF4D;
`

export const StyledLogosBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 55px;
`

export const StyledCopiight = styled.pre`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 17.88px;
    letter-spacing: 0px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    padding-right: 40px;
    box-sizing: border-box;
`

export const StyledNavBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const StyledMainNav = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 1.4px;
    vertical-align: middle;
    text-transform: uppercase;
    color: #6B8AC6;
    margin-bottom: 20px;
`

export const StyledSecondaryNav = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`

export const StyledContacts = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`

export const StyledPhone = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -1px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`