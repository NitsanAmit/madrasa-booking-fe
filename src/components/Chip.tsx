import React from "react";
import styled from "@emotion/styled";


export const Chip: React.FC<ChipProps> = ({text, color, disabled, onChipClick}) => {

    return (
        <StyledChip backgroundColor={color} disabled={disabled} onClick={onChipClick}>
            {text}
        </StyledChip>
    )
}

const StyledChip = styled('div')<{ backgroundColor: string; disabled: boolean; }>`
  border-radius: 10px;
  width: 70px;
  margin: 6px;
  padding: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: ${({disabled}) => disabled ? undefined : '#0000001A 0 2px 6px'};
  text-align: center;
  cursor: ${({disabled}) => disabled ? 'cursor' : 'pointer'};
  background: ${({backgroundColor}) => backgroundColor};
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    transform: ${({disabled}) => disabled ? undefined : 'scale(1.05, 1.05)'};
    box-shadow: ${({disabled}) => disabled ? undefined : '#0000001A 0 2px 6px'};
  }

`;

export interface ChipProps {
    text: string;
    color: string;
    disabled: boolean;
    onChipClick?: () => void;
}