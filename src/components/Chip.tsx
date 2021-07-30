import React from "react";
import styled from "@emotion/styled";


export const Chip: React.FC<ChipProps> = ({text, color, onChipClick}) => {

    return (
        <StyledChip backgroundColor={color} onClick={onChipClick}>
            {text}
        </StyledChip>
    )
}

const StyledChip = styled('div')<{ backgroundColor: string; }>`
  border-radius: 10px;
  width: 100px;
  margin: 4px;
  padding: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: #cccccc 1px 2px 1px;
  color: white;
  text-align: center;
  cursor: pointer;
  background: ${({backgroundColor}) => backgroundColor};
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: #cccccc 3px 3px 4px;
  }

`;

export interface ChipProps {
    text: string;
    color: string;
    onChipClick?: () => void;
}