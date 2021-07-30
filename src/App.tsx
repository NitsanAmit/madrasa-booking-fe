import React, {useCallback} from 'react';
import './App.css';
import {Schedule} from "./components/Schedule";


export const App: React.FC = () => {

  const onSlotClick = useCallback((time, day) => {
    //TODO
    console.log("Day: ", day, " Time: ", time);
  }, []);

  return (
      <>
        <Schedule onSlotClick={onSlotClick}/>
      </>
  );
}

export default App;
