import type { JSX } from "react/jsx-runtime";
import { StyledProductsBlockHeader, StyledProductsBlockSubtitle, StyledProductsBlockTitle, StyledProductsBlockWrapper, StyledProductsCardContent } from "../ProductsBlock/styles";
import { StyledAboutProductCard, StyledAboutProductCardLink, StyledAboutProductCardSubtitle, StyledAboutProductCardTitle, StyledAboutProductsCardContent, StyledProductIcon, StyledProgress } from "./styles";

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
    animate?: boolean;
}

export const AboutProductBlock: React.FC<IAboutProductProps> = ({
    title = '',
    subtitle = '',
    cards = [],
    animate = false
}) => {
    return (
        <StyledProductsBlockWrapper>
            <StyledProductsBlockHeader>
                <StyledProductsBlockTitle>{title}</StyledProductsBlockTitle>
                <StyledProductsBlockSubtitle>{subtitle}</StyledProductsBlockSubtitle>
            </StyledProductsBlockHeader>
            <StyledAboutProductsCardContent startAnimation={animate}>
                {
                    cards.map(c => <StyledAboutProductCard>
                        <StyledProductIcon>{c?.icon ?? <></>}</StyledProductIcon>
                        <StyledAboutProductCardTitle>{c?.title}</StyledAboutProductCardTitle>
                        <StyledAboutProductCardSubtitle>{c?.subtitle}</StyledAboutProductCardSubtitle>
                        {c?.linkTitle ? <StyledAboutProductCardLink>{c?.linkTitle}{c?.linkIcon}</StyledAboutProductCardLink> 
                        : <StyledProgress animate={animate}/>}
                    </StyledAboutProductCard>)
                }
            </StyledAboutProductsCardContent>
        </StyledProductsBlockWrapper>
    )
}