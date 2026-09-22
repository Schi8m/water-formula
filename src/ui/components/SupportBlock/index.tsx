'use client'

import type { JSX } from "react/jsx-runtime";
import { StyledDescriptionBlock, StyledFAQRow, StyledMobileImgWrapper, StyledSupportBlockWrapper, StyledSupportCard, StyledSupportCards, StyledSupportCardSubtitle, StyledSupportCardText, StyledSupportCardTitle, StyledSupportImgBlock, StyledSupportInfoBlock, StyledSupportSubtitle, StyledSupportTitle } from "./styles";
import { useEffect, useState } from "react";
import { ModalWindow } from "../ModalWindow";

export interface ISupportCard {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    downloadLink?: string;
    downloadName?: string;
}

export interface ISupportBlockProps {
    title: string;
    subtitle: string;
    cards: ISupportCard[],
    image: string;
    animate?: boolean;
    faq: {title: string, subtitle: string, opened: boolean}[]
}

export const SupportBlock: React.FC<ISupportBlockProps> = ({
    title = '',
    subtitle = '',
    cards = [],
    image,
    animate = false,
    faq = []
}) => {

    const [showFAQModal, setShowFAQModal] = useState(false);
    const [faqs, setFaqs] = useState<{title: string, subtitle: string, opened: boolean}[]>([]);

    useEffect(() => {
        if (faq.length) setFaqs(faq);
    }, [faq]);


    const handleDownload = (url?: string, filename?: string) => {
        if (!url || ! filename) return;
        const link = document.createElement('a');
        link.href = url;
        if (filename) {
            link.download = filename;
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <StyledSupportBlockWrapper>
            <StyledSupportInfoBlock animate={animate}>
                <StyledSupportTitle>{title}</StyledSupportTitle>
                <StyledSupportSubtitle>{subtitle}</StyledSupportSubtitle>
                <StyledMobileImgWrapper>
                    <img src={image}/>
                </StyledMobileImgWrapper>
                <StyledSupportCards animate={animate}>
                    {cards.map((c, i) => <StyledSupportCard onClick={()=>{
                        if (i === 0) handleDownload(c?.downloadLink, c?.downloadName)
                        if (i === 1) setShowFAQModal(true)
                    }}>
                        {c?.icon}
                        <StyledSupportCardText>
                            <StyledSupportCardTitle>{c?.title}</StyledSupportCardTitle>
                            <StyledSupportCardSubtitle>{c?.subtitle}</StyledSupportCardSubtitle>
                        </StyledSupportCardText>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#6B8AC6"/>
                        </svg>
                    </StyledSupportCard>)}
                </StyledSupportCards>
            </StyledSupportInfoBlock>
            <StyledSupportImgBlock animate={animate}>
                <img src={image}/>
            </StyledSupportImgBlock>

            {showFAQModal ? <ModalWindow opened={showFAQModal} onClose={() => setShowFAQModal(false)}>
                <div style={{ maxWidth: 900, maxHeight: '60vh', overflowY: 'auto' }}>
                    {faqs.map((f, i) => <>
                    <StyledFAQRow opened={f?.opened} onClick={() => setFaqs(faqs.map(_f => {
                        if (_f?.title === f?.title) return ({..._f, opened: !_f?.opened})
                        return _f
                    }))}>
                        <div><label>{i+1}.</label> <label>{f?.title}</label></div>
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 25.9004L13.7 13.7004L1.5 1.50039" stroke="#D4D2D2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </StyledFAQRow>
                    {f?.opened? <StyledDescriptionBlock>{f?.subtitle}</StyledDescriptionBlock>: <></>}</>)}
                </div>
            </ModalWindow> : <></>}
        </StyledSupportBlockWrapper>
    )
}