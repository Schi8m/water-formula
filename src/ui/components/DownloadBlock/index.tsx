import type React from "react";
import { StyledSupportTitle } from "../SupportBlock/styles";
import { StyledDownlaodBlockDescription, StyledDownloadBlockButton, StyledDownloadBlockContent, StyledDownloadBlockSubtitle, StyledDownloadBlockWrapper } from "./styles";

export interface IDownloadBlockProps {
    title: string;
    subtitle: string;
    description: string;
    btnTitle: string;
}

export const DownloadBlock: React.FC<IDownloadBlockProps> = ({
    title = '',
    subtitle = '',
    description = '',
    btnTitle = ''
}) => {
    return (
        <StyledDownloadBlockWrapper>
            <StyledSupportTitle>{title}</StyledSupportTitle>
            <StyledDownloadBlockContent>
                <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 24L6 14L8.8 11.1L14 16.3V0H18V16.3L23.2 11.1L26 14L16 24ZM4 32C2.9 32 1.95833 31.6083 1.175 30.825C0.391667 30.0417 0 29.1 0 28V22H4V28H28V22H32V28C32 29.1 31.6083 30.0417 30.825 30.825C30.0417 31.6083 29.1 32 28 32H4Z" fill="#E9D9D9"/>
                </svg>
                <StyledDownloadBlockSubtitle>{subtitle}</StyledDownloadBlockSubtitle>
                <StyledDownlaodBlockDescription>{description}</StyledDownlaodBlockDescription>
                <StyledDownloadBlockButton>{btnTitle}</StyledDownloadBlockButton>
            </StyledDownloadBlockContent>
        </StyledDownloadBlockWrapper>
    )
}