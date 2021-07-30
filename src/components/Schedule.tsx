import React from "react";
import {ScheduleRow} from "./ScheduleRow";
import styled from "@emotion/styled";

export const Schedule: React.FC<any> = (props) => {

    const timeSlots = (ScheduleEndHour - ScheduleStartHour) * 2;
    return (
        <StyledSchedule>
            {
                Array.from(Array(timeSlots).keys())
                    .map((_, index) => {
                    console.log(index);
                    return <ScheduleRow rowIndex={index} onSlotClick={props.onSlotClick}/>;
                })
            }
        </StyledSchedule>
    )
}

const ScheduleStartHour = 8;
const ScheduleEndHour = 22;

const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  flex-wrap: wrap;
  align-content: space-around;
  
  //overflow: scroll;
  //max-height: 600px;
`;



const FIRST_SLOT = 8;
const SLOT_SIZE = 0.5;
const MS_IN_DAY = 24 * 60 * 60 * 1000;
const WEEK_DAYS = 7;

export function getSlotTime(row: number): string {

    const the_slot = FIRST_SLOT + row * SLOT_SIZE;
    
    let hh = Math.floor(the_slot).toString();
    if(hh.length === 1){
        hh = '0'+hh;
    }
    const ss = the_slot%1 === 0 ? '00': '30'
    
    return `${hh}:${ss}`;
}

export function firstSlotToBook(row: number, column: number): Date {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const nowDay = today.getDay();
    let firstDate = undefined;
    if(row > nowDay) { //on the left
        firstDate = new Date(now.getTime() + (row-nowDay) *MS_IN_DAY);
    } else{
        firstDate = new Date(now.getTime() + (WEEK_DAYS-nowDay + row) *MS_IN_DAY);
    }
    const firstSlot = new Date(firstDate.getTime() + (FIRST_SLOT + column) * SLOT_SIZE)
    return firstSlot;
}