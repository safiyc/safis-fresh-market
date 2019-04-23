import React from 'react';
import DaySelection from './DaySelection';
import DayData from './DayData';

function DayDisplay() {
  return (
    <div>
      <DaySelection />
      <DayData
        day="Sunday"
        location="Lents International" hours="9:00am - 2:00pm"
        booth="4A" />
    </div>
  );
}

export default DayDisplay;
