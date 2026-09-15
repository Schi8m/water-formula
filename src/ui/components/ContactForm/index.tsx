'use client'
import type React from "react";
import { FormRow, StyledCheckBoxWrapper, StyledCheckBoxDescription, StyledCheckBoxRow, StyledContactFormContent, StyledContactFormSubtitle, StyledContactFormText, StyledContactFormTitle, StyledContactFormWrapper, StyledForm, StyledInput, StyledSendButton, StyledTextArea, HiddenCheckbox, StyledCheckbox, StyledSelect } from "./styles";
import { useState } from "react";

export interface IContactFormProps {
    title: string;
    subtitle: string;
    checkboxDescr: string;
    sendBtnTitle: string;
    animate?: boolean;
    onSubmit?: (name?: string, email?: string, version?: string, count?: number, addInfo?: string) => void
}

export const ContactForm: React.FC<IContactFormProps> = ({
    title = '',
    subtitle = '',
    checkboxDescr = '',
    sendBtnTitle = '',
    animate = false,
    onSubmit
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedVersion, setSelectedVersion] = useState('1.1.0');
    const [count, setCount] = useState<number>();
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [policyChecked, setPolicyChecked] = useState(false);

    return (
        <StyledContactFormWrapper animate={animate}>
            <StyledContactFormContent>
                <StyledContactFormText>
                    <StyledContactFormTitle>{title}</StyledContactFormTitle>
                    <StyledContactFormSubtitle>{subtitle}</StyledContactFormSubtitle>
                </StyledContactFormText>
                <StyledForm>
                    <FormRow>
                        <StyledInput placeholder="ИМЯ / ОРГАНИЗАЦИЯ" value={name} onChange={e => setName(e?.target?.value)}/>
                        <StyledInput placeholder="EMAIL АДРЕС" value={email} onChange={e => setEmail(e?.target?.value)} type="email"/>
                    </FormRow>
                    <FormRow>
                        <StyledSelect onChange={e => setSelectedVersion(e?.target?.value)}>
                            <option value="" disabled selected>ВЫБЕРИТЕ ВЕРСИЮ ПОСТАВКИ</option>
                            <option value="Базовый">Базовый</option>
                            <option value="Стандарт">Стандарт</option>
                            <option value="Профи">Профи</option>
                        </StyledSelect>
                        <StyledInput placeholder="КОЛИЧЕСТВО ЛИЦЕНЗИЙ" type="number" value={count} onChange={e => setCount(Math.abs(parseInt(e?.target?.value)))}/>
                    </FormRow>
                    <StyledTextArea placeholder="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ" rows={5} value={additionalInfo} onChange={e => setAdditionalInfo(e?.target?.value)}/>
                    <StyledCheckBoxRow>
                        <StyledCheckBoxWrapper>
                            <HiddenCheckbox />
                            <StyledCheckbox checked={policyChecked} onClick={() => setPolicyChecked(!policyChecked)}/>
                            <StyledCheckBoxDescription>{checkboxDescr}</StyledCheckBoxDescription>
                        </StyledCheckBoxWrapper>
                    </StyledCheckBoxRow>
                    <StyledSendButton
                        disabled={!policyChecked}
                        onClick={() => onSubmit?.(name, email, selectedVersion, count, additionalInfo)}
                    >{sendBtnTitle}</StyledSendButton>
                </StyledForm>
            </StyledContactFormContent>
        </StyledContactFormWrapper>
    )
}