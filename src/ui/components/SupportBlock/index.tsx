import type { JSX } from "react/jsx-runtime";
import { StyledSupportBlockWrapper, StyledSupportCard, StyledSupportCards, StyledSupportCardSubtitle, StyledSupportCardText, StyledSupportCardTitle, StyledSupportImgBlock, StyledSupportInfoBlock, StyledSupportSubtitle, StyledSupportTitle } from "./styles";

export interface ISupportCard {
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export interface ISupportBlockProps {
    title: string;
    subtitle: string;
    cards: ISupportCard[],
    image: string;
}

export const SupportBlock: React.FC<ISupportBlockProps> = ({
    title = '',
    subtitle = '',
    cards = [],
    image
}) => {
    return (
        <StyledSupportBlockWrapper>
            <StyledSupportInfoBlock>
                <StyledSupportTitle>{title}</StyledSupportTitle>
                <StyledSupportSubtitle>{subtitle}</StyledSupportSubtitle>
                <StyledSupportCards>
                    {cards.map(c => <StyledSupportCard>
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
            <StyledSupportImgBlock>
                <img src={image}/>
            </StyledSupportImgBlock>
        </StyledSupportBlockWrapper>
    )
}