import { StyledMainBannerButton, StyledMainBannerButtonsBlock, StyledMainBannerLeftBlock, StyledMainBannerRightBlock, StyledMainBannerSubtitle, StyledMainBannerTitle, StyledMainBannerWrapper } from "./styles";
import mainBanner from '../../../../public/main_banner.png'

export interface IMainBannerProps {
    title: string;
    subtitle: string;
    buttons: string[];
}

export const MainBanner: React.FC<IMainBannerProps> = ({
    title = '',
    subtitle = '',
    buttons = []
}) => {
    return (
        <StyledMainBannerWrapper>
            <StyledMainBannerLeftBlock>
                <StyledMainBannerTitle>{title}</StyledMainBannerTitle>
                <StyledMainBannerSubtitle>{subtitle}</StyledMainBannerSubtitle>
                <StyledMainBannerButtonsBlock>
                    {
                        buttons.map((b,index) =>
                            <StyledMainBannerButton>
                                {b}
                                {index === 0 && <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33333 10L7.16667 8.79167L10.125 5.83333H0V4.16667H10.125L7.16667 1.20833L8.33333 0L13.3333 5L8.33333 10Z" fill="white"/>
                                    </svg>
                                }
                            </StyledMainBannerButton>
                        )
                    }
                </StyledMainBannerButtonsBlock>
            </StyledMainBannerLeftBlock>
            <StyledMainBannerRightBlock>
                <img src={mainBanner}/>
            </StyledMainBannerRightBlock>
        </StyledMainBannerWrapper>
    )
}