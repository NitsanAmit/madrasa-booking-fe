import React from "react";
import styled from "@emotion/styled";


export const Chip: React.FC<ChipProps> = ({text, color, onChipClick}) => {

    return (
        <StyledChip backgroundColor={color} onClick={onChipClick}>
            {text}
        </StyledChip>
    )
}

const StyledChip = styled.div(({backgroundColor}: {backgroundColor: string}) => ({
    borderRadius: 15,
    width: 'auto',
    margin: 'auto',
    background: backgroundColor
}))

export interface ChipProps {
    text: string;
    color: string;
    onChipClick?: () => void;
}