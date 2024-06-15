import React, { useState } from 'react';
import { FaDropbox, FaEdit, FaSave } from 'react-icons/fa';
import ManagementDashboard from './ManagementDashboard';

// Sample Data
const timetableData = [
  {
    class: "5th Grade",
    schedule: {
      Monday: [
        { time: "9:00 - 10:00", subject: "Math" },
        { time: "10:00 - 11:00", subject: "Science" },
        { time: "11:00 - 12:00", subject: "English" }
      ],
      Tuesday: [
        { time: "9:00 - 10:00", subject: "History" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "Geography" }
      ],
      Wednesday: [
        { time: "9:00 - 10:00", subject: "Science" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "English" }
      ],
      Thursday: [
        { time: "9:00 - 10:00", subject: "History" },
        { time: "10:00 - 11:00", subject: "Science" },
        { time: "11:00 - 12:00", subject: "Geography" }
      ],
      Friday: [
        { time: "9:00 - 10:00", subject: "Math" },
        { time: "10:00 - 11:00", subject: "Science" },
        { time: "11:00 - 12:00", subject: "English" }
      ]
    }
  },
  {
    class: "6th Grade",
    schedule: {
      Monday: [
        { time: "9:00 - 10:00", subject: "Geography" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "History" }
      ],
      Tuesday: [
        { time: "9:00 - 10:00", subject: "Science" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "Geography" }
      ],
      Wednesday: [
        { time: "9:00 - 10:00", subject: "English" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "Science" }
      ],
      Thursday: [
        { time: "9:00 - 10:00", subject: "Geography" },
        { time: "10:00 - 11:00", subject: "Math" },
        { time: "11:00 - 12:00", subject: "History" }
      ],
      Friday: [
        { time: "9:00 - 10:00", subject: "Science" },
        { time: "10:00 - 11:00", subject: "Geography" },
        { time: "11:00 - 12:00", subject: "Math" }
      ]
    }
  }
  // Add more classes as needed
];

const Timetable = ({ classData, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState(classData.schedule);

  const handleChange = (day, index, key, value) => {
    const updatedSchedule = { ...editedSchedule };
    updatedSchedule[day][index][key] = value;
    setEditedSchedule(updatedSchedule);
  };

  const handleSave = () => {
    onSave(classData.class, editedSchedule);
    setIsEditing(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ marginBottom: '20px', }} className='Style1'>
      
      <h3 onClick={toggleCollapse} style={{ cursor: 'pointer',backgroundColor:"lightgray" }}>
        {classData.class}
      </h3>
      {!isCollapsed && (
        <>
          {Object.keys(classData.schedule).map(day => (
            <div key={day} className='Style1'>
              <h4>{day}</h4>
              <ul>
                {classData.schedule[day].map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px',backgroundColor:"whitesmoke" }}>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={editedSchedule[day][index].time}
                          onChange={(e) => handleChange(day, index, 'time', e.target.value)}
                          style={{ flex: 1, marginRight: '10px' }}
                        />
                        <input
                          type="text"
                          value={editedSchedule[day][index].subject}
                          onChange={(e) => handleChange(day, index, 'subject', e.target.value)}
                          style={{ flex: 1, marginRight: '10px' }}
                        />
                      </>
                    ) : (
                      <p>{item.time} - {item.subject}</p>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          ))}
          <button onClick={() => setIsEditing(!isEditing)} className="btn btn-primary">
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? " Save" : " Edit"}
          </button>
        </>
      )}
    </div>
  );
};

const SchemeOfWorkTimetable = () => {
  const [data, setData] = useState(timetableData);

  const handleSave = (className, updatedSchedule) => {
    setData(prevData =>
      prevData.map(classData =>
        classData.class === className ? { ...classData, schedule: updatedSchedule } : classData
      )
    );
  };

  return (
    <div className='Style1'>
      <ManagementDashboard/>
      <h2>Scheme of Work and Timetable</h2>
      {data.map(classData => (
        <Timetable key={classData.class} classData={classData} onSave={handleSave} />
      ))}
    </div>
  );
};

export default SchemeOfWorkTimetable;
