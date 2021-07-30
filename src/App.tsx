import React, {useCallback} from 'react';
import './App.css';
import {Schedule} from "./components/Schedule";
import styled from "@emotion/styled";
import {BookingSummary} from "./components/BookingSummary";
import {ChooseTeacher} from "./components/ChooseTeacher";

export const App: React.FC = () => {

    const [loggedUser, setLoggedUser] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    const [chosenYear, setChosenYear] = React.useState(null);
    const [chosenMonth, setChosenMonth] = React.useState(null);
    const [chosenDay, setChosenDay] = React.useState(null);
    const [chosenTime, setChosenTime] = React.useState(null);

    const onSlotClick = useCallback((time, day) => {
        setChosenDay(day);
        setChosenTime(time);
        console.log("Day: ", day, " Time: ", time);
    }, []);


    return (
        <StyledContainer>
            <Schedule onSlotClick={onSlotClick}/>

            <BookingSummary/>
            <ChooseTeacher/>
        </StyledContainer>
    );

    //<Schedule progress={progress} setProgress={setProgress} />

    //{progress > 0 ? <ChooseTeacher {...props} progress={progress} setProgress={setProgress} /> : <></>}
}

export default App;

const StyledContainer = styled.div`
  margin: auto;
`;