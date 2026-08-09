import styled from "styled-components";
import '@fontsource/akt';
import { COLORS } from "../../variables";

export const StyledContactFormWrapper = styled.div`
    padding-inline: 192px;
    padding-block: 48px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1150px) {
        padding-inline: 64px;
    }
`

export const StyledContactFormContent = styled.div`
    background-color: #6B8AC633;
    border-radius: 20px;
    padding: 64px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

   @media (max-width: 860px) {
    padding: 24px;
   }
`

export const StyledContactFormText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export const StyledContactFormTitle = styled.h1`
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

export const StyledContactFormSubtitle = styled.span`
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

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
   @media (max-width: 860px) {
    flex-direction: column;
   }
`

export const StyledInput = styled.input`
    background-color: #6B8AC633;
    border-radius: 16px;
    padding: 20px;
    border: none;
    outline: none;
    width: 100%;
    color: ${COLORS.MAIN.TEXT_LIGHT};
    box-sizing: border-box;

    &::placeholder {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.7px;
        vertical-align: middle;
        color: #D4D2D280;
    }

   @media (max-width: 860px) {
    &::placeholder {
        font-size: 12px;
    }
   }
`

export const StyledTextArea = styled.textarea`
    background-color: #6B8AC633;
    border-radius: 16px;
    padding: 20px;
    border: none;
    outline: none;
    resize: none;
    color: ${COLORS.MAIN.TEXT_LIGHT};

    &::placeholder {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.7px;
        vertical-align: middle;
        color: #D4D2D280;
    }
`

export const StyledCheckBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 25px;
`

export const StyledCheckBoxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  background: ${props => props.checked ? '#6B8AC6' : '#6B8AC633'};
  border: 2px solid ${props => props.checked ? '#6B8AC6' : '#6B8AC633'};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '✓';
    color: white;
    font-size: 14px;
    opacity: ${props => props.checked ? 1 : 0};
    transform: ${props => props.checked ? 'scale(1)' : 'scale(0.5)'};
    transition: all 0.2s ease;
  }
`

export const StyledCheckBoxDescription = styled.label`
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

export const StyledSendButton = styled.button`
    border: none;
    outline: none;

    background-color: #556E9D;
    border-radius: 16px;
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
    color: #D4D2D2;
    height: 80px;
    width: 100%;
    text-transform: uppercase;
`