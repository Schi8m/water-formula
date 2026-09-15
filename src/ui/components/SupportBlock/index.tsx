import type { JSX } from "react/jsx-runtime";
import { StyledMobileImgWrapper, StyledSupportBlockWrapper, StyledSupportCard, StyledSupportCards, StyledSupportCardSubtitle, StyledSupportCardText, StyledSupportCardTitle, StyledSupportImgBlock, StyledSupportInfoBlock, StyledSupportSubtitle, StyledSupportTitle } from "./styles";

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
}

export const SupportBlock: React.FC<ISupportBlockProps> = ({
    title = '',
    subtitle = '',
    cards = [],
    image,
    animate = false
}) => {

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
                    {cards.map(c => <StyledSupportCard onClick={()=>handleDownload(c?.downloadLink, c?.downloadName)}>
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
        </StyledSupportBlockWrapper>
    )
}