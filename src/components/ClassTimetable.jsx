import React from 'react';

const ClassTimetable = ({ timetable }) => {
  return (
    <div>
      <h2 style={{color:"blue"}}>Class Timetable</h2>
      {Object.keys(timetable).map(day => (
        <div key={day}>
          <h4>{day}</h4>
          <ul>
            {timetable[day].map((item, index) => (
              <li key={index}>
                <p>{item.time} - {item.subject}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ClassTimetable;
