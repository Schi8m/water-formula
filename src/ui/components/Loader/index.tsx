import type React from "react";
import { StyledSpinner, StyledSpinnerWrapper } from "./styles";

export const Loader:React.FC = () => {
    return <StyledSpinnerWrapper>
        <StyledSpinner />
    </StyledSpinnerWrapper>
}