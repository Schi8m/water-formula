import { StyledAboutDeveloperContent, StyledAboutDeveloperPart, StyledAboutDeveloperPartsBlock, StyledAboutDeveloperTitle, StyledAboutDeveloperWrapper } from "./styles";

export interface IAboutDeveloperProps {
    title: string;
    firstPart: string;
    secondPart: string;
}

export const AboutDeveloperBlock: React.FC<IAboutDeveloperProps> = ({
    title = '',
    firstPart = '',
    secondPart = ''
}) => {
    return (
        <StyledAboutDeveloperWrapper>
            <StyledAboutDeveloperContent>
                <StyledAboutDeveloperTitle>{title}</StyledAboutDeveloperTitle>
                <StyledAboutDeveloperPartsBlock>
                    <StyledAboutDeveloperPart>{firstPart}</StyledAboutDeveloperPart>
                    <StyledAboutDeveloperPart>{secondPart}</StyledAboutDeveloperPart>
                </StyledAboutDeveloperPartsBlock>
            </StyledAboutDeveloperContent>
        </StyledAboutDeveloperWrapper>
    )
}