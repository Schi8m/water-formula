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
    onOpenModal?: () => void;
    downLoadPresentationLink?: string;
}

export const AboutProductBlock: React.FC<IAboutProductProps> = ({
    title = '',
    subtitle = '',
    cards = [],
    animate = false,
    onOpenModal = () => {},
    downLoadPresentationLink
}) => {
    return (
        <StyledProductsBlockWrapper>
            <StyledProductsBlockHeader>
                <StyledProductsBlockTitle>{title}</StyledProductsBlockTitle>
                <StyledProductsBlockSubtitle>{subtitle}</StyledProductsBlockSubtitle>
            </StyledProductsBlockHeader>
            <StyledAboutProductsCardContent startAnimation={animate}>
                {
                    cards.map((c, i) => <StyledAboutProductCard>
                        <StyledProductIcon>{c?.icon ?? <></>}</StyledProductIcon>
                        <StyledAboutProductCardTitle>{c?.title}</StyledAboutProductCardTitle>
                        <StyledAboutProductCardSubtitle>{c?.subtitle}</StyledAboutProductCardSubtitle>
                        {c?.linkTitle ?
                            <StyledAboutProductCardLink
                                onClick={i === 0 ? onOpenModal : () => {}}
                                href={i === 1 ? downLoadPresentationLink : ''}
                                download={i === 1 ? 'Presentation.pdf' : false}
                            >{c?.linkTitle}{c?.linkIcon}</StyledAboutProductCardLink> 
                        : <StyledProgress animate={animate}/>}
                    </StyledAboutProductCard>)
                }
            </StyledAboutProductsCardContent>
        </StyledProductsBlockWrapper>
    )
}