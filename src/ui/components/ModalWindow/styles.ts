import styled from "styled-components";

export const StyledBackdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    z-index: 10;
    background-color: rgba(10,10,40,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledWindow = styled.div`
    border-radius: 16px;
    background-color: #6B8AC633;
    min-width: 300px;
    border: 1px solid lightgray;
    padding: 48px;
    position: relative;
    backdrop-filter: blur(8px);

   & > div {
        gap: 4px;
        margin: 0;
   }

   & > div > div {
    align-items: center;
   }
   & label {
    font-size: 32px;
    font-weight: 500;
    user-select: none;
    cursor: pointer;
   }

   & svg {
    max-width: unset;
    max-height: unset;
   }
`
export const StyledModalHeader = styled.div`
    display: flex;
    margin-top: -16px !important;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px !important;

    & > svg {
        cursor: pointer;
    }
`