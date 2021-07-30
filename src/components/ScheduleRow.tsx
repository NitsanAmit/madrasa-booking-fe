import React from "react";
import {Chip} from "./Chip";
import styled from "@emotion/styled";

export const ScheduleRow: React.FC<ScheduleRowProps> = ({rowIndex, onSlotClick, /**isSlotAvailable*/}) => {

    return (
        <StyledRow>
            {
                Array.from(Array(DaysPerWeek).keys())
                    .map((_, colIndex) => {
                        console.log("col", colIndex);
                        const isAvailable = isSlotAvailable(rowIndex, colIndex);
                        return <Chip text={getChipText(rowIndex)}
                                     color={isAvailable ? 'green' : 'red'}
                                     onChipClick={isAvailable ? (() => onSlotClick(rowIndex, colIndex)) : undefined}
                        />;
                    })
            }
        </StyledRow>
    )
}

const ScheduleStartHour = 8;
const ScheduleSlotSize = 0.5;

const getChipText = (rowIndex: number) => {
    const currentSlot = ScheduleStartHour + rowIndex * ScheduleSlotSize;
    let hour = Math.floor(currentSlot).toString();
    if (hour.length === 1) {
        hour = '0' + hour;
    }
    const minutes = currentSlot % 1 === 0 ? '00' : '30'
    return `${hour}:${minutes}`;
};

export interface ScheduleRowProps {
    rowIndex: number;
    onSlotClick: (day: number, time: number) => void;
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const isSlotAvailable = (row: number, col: number) => row && col;
const DaysPerWeek = 7;
