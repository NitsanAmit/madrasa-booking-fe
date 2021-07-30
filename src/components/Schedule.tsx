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