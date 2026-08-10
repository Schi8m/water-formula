import { StyledAboutDeveloperContent, StyledAboutDeveloperPart, StyledAboutDeveloperPartsBlock, StyledAboutDeveloperTitle, StyledAboutDeveloperWrapper } from "./styles";

export interface IAboutDeveloperProps {
    title: string;
    firstPart: string;
    secondPart: string;
    animate?:boolean;
}

export const AboutDeveloperBlock: React.FC<IAboutDeveloperProps> = ({
    title = '',
    firstPart = '',
    secondPart = '',
    animate = false
}) => {
    return (
        <StyledAboutDeveloperWrapper>
            <StyledAboutDeveloperContent animate={animate}>
                <StyledAboutDeveloperTitle>{title}</StyledAboutDeveloperTitle>
                <StyledAboutDeveloperPartsBlock>
                    <StyledAboutDeveloperPart>{firstPart}</StyledAboutDeveloperPart>
                    <StyledAboutDeveloperPart>{secondPart}</StyledAboutDeveloperPart>
                </StyledAboutDeveloperPartsBlock>
            </StyledAboutDeveloperContent>
        </StyledAboutDeveloperWrapper>
    )
}