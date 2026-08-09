import type React from "react";
import { FormRow, StyledCheckBoxWrapper, StyledCheckBoxDescription, StyledCheckBoxRow, StyledContactFormContent, StyledContactFormSubtitle, StyledContactFormText, StyledContactFormTitle, StyledContactFormWrapper, StyledForm, StyledInput, StyledSendButton, StyledTextArea, HiddenCheckbox, StyledCheckbox } from "./styles";

export interface IContactFormProps {
    title: string;
    subtitle: string;
    checkboxDescr: string;
    sendBtnTitle: string;
}

export const ContactForm: React.FC<IContactFormProps> = ({
    title = '',
    subtitle = '',
    checkboxDescr = '',
    sendBtnTitle = ''
}) => {
    return (
        <StyledContactFormWrapper>
            <StyledContactFormContent>
                <StyledContactFormText>
                    <StyledContactFormTitle>{title}</StyledContactFormTitle>
                    <StyledContactFormSubtitle>{subtitle}</StyledContactFormSubtitle>
                </StyledContactFormText>
                <StyledForm>
                    <FormRow>
                        <StyledInput placeholder="ИМЯ / ОРГАНИЗАЦИЯ"/>
                        <StyledInput placeholder="EMAIL АДРЕС"/>
                    </FormRow>
                    <FormRow>
                        <StyledInput placeholder="ВЫБЕРИТЕ ВЕРСИЮ ПОСТАВКИ"/>
                        <StyledInput placeholder="КОЛИЧЕСТВО ЛИЦЕНЗИЙ"/>
                    </FormRow>
                    <StyledTextArea placeholder="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ" rows={5}/>
                    <StyledCheckBoxRow>
                        <StyledCheckBoxWrapper>
                            <HiddenCheckbox />
                            <StyledCheckbox checked={false} />
                            <StyledCheckBoxDescription>{checkboxDescr}</StyledCheckBoxDescription>
                        </StyledCheckBoxWrapper>
                    </StyledCheckBoxRow>
                    <StyledSendButton>{sendBtnTitle}</StyledSendButton>
                </StyledForm>
            </StyledContactFormContent>
        </StyledContactFormWrapper>
    )
}