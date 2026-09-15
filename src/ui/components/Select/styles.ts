import styled from "styled-components";
import { COLORS } from "../../variables";

export const StyledSelect = styled.div.attrs<{
    opened: boolean
}>(props => ({
    opened: props?.opened
}))`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 55px;
    background-color: #6B8AC633;
    padding: 20px;
    border: none;
    outline: none;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;

    & > label {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.7px;
        vertical-align: middle;
        color: #D4D2D280;
    }

    & > span {
         font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.7px;
        vertical-align: middle;
        color: white;
    }
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    border-bottom-left-radius: ${({opened}) => opened ? 0 : 16}px;
    border-bottom-right-radius: ${({opened}) => opened ? 0 : 16}px;

`

export const StyledOptionsList = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 55px;
    background-color: red;
    width: 100%;
    z-index: 5;
    background-color: #324269;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    backdrop-filter: blur(16px);    
`

export const StyledOption = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.7px;
    vertical-align: middle;
    color: white;
    padding: 20px;
    border-top: 1px solid lightgray;
`