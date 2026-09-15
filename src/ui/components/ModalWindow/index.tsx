'use client'
import type { JSX } from "react/jsx-runtime";
import { StyledBackdrop, StyledModalHeader, StyledWindow } from "./styles";
import { useEffect, useState } from "react";

interface IModalWindowProps {
    opened: boolean;
    onClose: () => void;
    children?: JSX.Element;
    title?: string;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({
    opened = false,
    onClose = () => {},
    children = <></>,
    title = ''
}) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!opened || !mounted) return null;

    return (
        <StyledBackdrop>
            <StyledWindow>
                <StyledModalHeader>
                    <h3>{title}</h3>
                    <svg onClick={onClose} width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99922 39.9922L0 35.993L15.9969 19.9961L0 3.99922L3.99922 0L19.9961 15.9969L35.993 0L39.9922 3.99922L23.9953 19.9961L39.9922 35.993L35.993 39.9922L19.9961 23.9953L3.99922 39.9922Z" fill="#D4D2D2"/>
                    </svg>
                </StyledModalHeader>
                {children}
            </StyledWindow>
        </StyledBackdrop>
    )
}
