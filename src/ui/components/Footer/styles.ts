import styled from "styled-components";
import { COLORS, SIZES } from "../../variables";

export const StyledFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    padding-inline: max(${SIZES.INDENTS.DESKTOP_PADDINGS}px, calc((100vw - 1460px) / 2));
    padding-block: 48px;
    gap: 64px;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #080E26;
    border-top: 1px solid #C4C6CF4D;

    @media(max-width: 876px) {
        flex-direction: column;
        padding-inline: 16px;
    }
`

export const StyledNavsRow = styled.div`
    display: flex;
    box-sizing: border-box;
    gap: 64px;
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;

    @media(max-width: 876px) {
        gap: 20px;
    }
`

export const StyledLogosBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 55px;
    max-width: fit-content;
`

export const StyledCopiight = styled.pre`
    font-family: 'Roboto Condensed', sans-serif;
    font-stretch: condensed;
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

    @media (max-width: 876px) {
        &:last-child {
            flex: 3;
        }
    }
`

export const StyledMainNav = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-stretch: condensed;
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
    font-stretch: condensed;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0px;
    vertical-align: middle;
    text-transform: uppercase;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    text-decoration: none;
`

export const StyledContacts = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-stretch: condensed;
    font-weight: 500;
    font-style: Medium;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    & > a {
        text-decoration: none;
        cursor: pointer;
        color: #244988;
        font-size: 16px;
    }
`

export const StyledPhone = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-stretch: condensed;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -1px;
    vertical-align: middle;
    color: ${COLORS.MAIN.TEXT_LIGHT};
`