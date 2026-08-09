import type { JSX } from "react/jsx-runtime";
import { StyledProductsBlockHeader, StyledProductsBlockSubtitle, StyledProductsBlockTitle, StyledProductsBlockWrapper, StyledProductsCardContent } from "../ProductsBlock/styles";
import { StyledAboutProductCard, StyledAboutProductCardLink, StyledAboutProductCardSubtitle, StyledAboutProductCardTitle, StyledProductIcon } from "./styles";

export interface IAboutProductCard {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    linkTitle?: string;
    linkIcon?: JSX.Element;
    onClick?: () => void;
}

export interface IAboutProductProps {
    title: string;
    subtitle: string;
    cards: IAboutProductCard[]
}

export const AboutProductBlock: React.FC<IAboutProductProps> = ({
    title = '',
    subtitle = '',
    cards = []
}) => {
    return (
        <StyledProductsBlockWrapper>
            <StyledProductsBlockHeader>
                <StyledProductsBlockTitle>{title}</StyledProductsBlockTitle>
                <StyledProductsBlockSubtitle>{subtitle}</StyledProductsBlockSubtitle>
            </StyledProductsBlockHeader>
            <StyledProductsCardContent>
                {
                    cards.map(c => <StyledAboutProductCard>
                        <StyledProductIcon>{c?.icon ?? <></>}</StyledProductIcon>
                        <StyledAboutProductCardTitle>{c?.title}</StyledAboutProductCardTitle>
                        <StyledAboutProductCardSubtitle>{c?.subtitle}</StyledAboutProductCardSubtitle>
                        <StyledAboutProductCardLink>{c?.linkTitle}{c?.linkIcon}</StyledAboutProductCardLink>
                    </StyledAboutProductCard>)
                }
            </StyledProductsCardContent>
        </StyledProductsBlockWrapper>
    )
}