'use client'

import { useState } from "react";
import { StyledOption, StyledOptionsList, StyledSelect } from "./styles"

interface ISelectProps {
    placeholder: string;
    value?: string;
    values?: string[];
    onSelect?: (v: string) => void;
}

export default function Select(props: ISelectProps) {
    const [opened, setOpened] = useState(false);

    return (
        <StyledSelect onClick={() => setOpened(!opened)} opened={opened}>
            {props?.value
                ? <span>{props?.value}</span>
                : <label>{props.placeholder}</label>}
            
            {opened && <StyledOptionsList>
                {props.values?.map(v => <StyledOption onClick={() => props.onSelect?.(v)}>{v}</StyledOption>)}
            </StyledOptionsList>}
        </StyledSelect>
    )
}