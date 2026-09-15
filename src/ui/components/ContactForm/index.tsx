'use client'
import type React from "react";
import { FormRow, StyledCheckBoxWrapper, StyledCheckBoxDescription, StyledCheckBoxRow, StyledContactFormContent, StyledContactFormSubtitle, StyledContactFormText, StyledContactFormTitle, StyledContactFormWrapper, StyledForm, StyledInput, StyledSendButton, StyledTextArea, HiddenCheckbox, StyledCheckbox, StyledSelect } from "./styles";
import { useState } from "react";
import Select from "../Select";

export interface IContactFormProps {
    title: string;
    subtitle: string;
    sendBtnTitle: string;
    animate?: boolean;
    onSubmit?: (name?: string, email?: string, version?: string, count?: number, addInfo?: string) => void
}

export const ContactForm: React.FC<IContactFormProps> = ({
    title = '',
    subtitle = '',
    sendBtnTitle = '',
    animate = false,
    onSubmit
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedVersion, setSelectedVersion] = useState<string | undefined>(undefined);
    const [count, setCount] = useState('');
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
                        <Select
                            placeholder="ВЫБЕРИТЕ ВЕРСИЮ ПОСТАВКИ"
                            value={selectedVersion}
                            values={['БАЗОВЫЙ', 'СТАНДАРТ', 'ПРОФИ']}
                            onSelect={v => setSelectedVersion(v)}
                        />
                        <StyledInput placeholder="КОЛИЧЕСТВО ЛИЦЕНЗИЙ" type="text" value={count} onChange={e => setCount(e?.target?.value?.replace(/\D/g, ''))}/>
                    </FormRow>
                    <StyledTextArea placeholder="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ" rows={5} value={additionalInfo} onChange={e => setAdditionalInfo(e?.target?.value)}/>
                    <StyledCheckBoxRow>
                        <StyledCheckBoxWrapper>
                            <HiddenCheckbox />
                            <StyledCheckbox checked={policyChecked} onClick={() => setPolicyChecked(!policyChecked)}/>
                            <StyledCheckBoxDescription>Я СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ В СООТВЕТСТВИИ С <a
                                href='/files/Политика обработки ПД_ИдеяСофт.pdf'
                                download='Политика обработки ПД_ИдеяСофт.pdf'
                            >ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</a>.</StyledCheckBoxDescription>
                        </StyledCheckBoxWrapper>
                    </StyledCheckBoxRow>
                    <StyledSendButton
                        disabled={!policyChecked}
                        onClick={() => onSubmit?.(name, email, selectedVersion, parseInt(count), additionalInfo)}
                    >{sendBtnTitle}</StyledSendButton>
                </StyledForm>
            </StyledContactFormContent>
        </StyledContactFormWrapper>
    )
}