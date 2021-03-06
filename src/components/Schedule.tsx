import React from "react";
import {ScheduleRow} from "./ScheduleRow";
import styled from "@emotion/styled";

export const Schedule: React.FC<any> = ({onSlotClick}) => {

    const timeSlots = (ScheduleEndHour - ScheduleStartHour) * 2;
    return (
        <StyledSchedule>
            <DaysOfWeek/>
            <ScrollableSection>
                {
                    Array.from(Array(timeSlots).keys())
                        .map((_, index) => {
                            return <ScheduleRow key={index} rowIndex={index} onSlotClick={onSlotClick}/>;
                        })
                }
            </ScrollableSection>
        </StyledSchedule>
    )
}

const ScheduleStartHour = 8;
const ScheduleEndHour = 22;

const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: fit-content;
  align-items: center;
  align-content: space-around;
`;

const ScrollableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  max-height: 400px;
  overflow-y: scroll;
`;

const DaysOfWeek = () => {
    return (
        <StyledDaysOfWeek>
            {
                Days.map(day => <StyledDay key={day}>{day}</StyledDay>)
            }
        </StyledDaysOfWeek>
    )
}

const Days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"].reverse();

const StyledDaysOfWeek = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  font: normal normal bold 24px/32px Assistant;
`;

const StyledDay = styled.div`
  width: 70px;
  margin: 6px;
  padding: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`;

const FIRST_SLOT = 8;
const SLOT_SIZE = 0.5;
const MS_IN_DAY = 24 * 60 * 60 * 1000;
const WEEK_DAYS = 7;

export function firstSlotToBook(row: number, column: number): Date {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const nowDay = today.getDay();
    let firstDate = undefined;
    if (row > nowDay) { //on the left
        firstDate = new Date(now.getTime() + (row - nowDay) * MS_IN_DAY);
    } else {
        firstDate = new Date(now.getTime() + (WEEK_DAYS - nowDay + row) * MS_IN_DAY);
    }
    const firstSlot = new Date(firstDate.getTime() + (FIRST_SLOT + column) * SLOT_SIZE)
    return firstSlot;
}