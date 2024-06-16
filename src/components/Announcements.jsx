import React from 'react';

const Announcements = ({ announcements }) => {
  return (
    <div>
      <h2 style={{color:"orange"}}>Announcements</h2>
      <ul className="list-group">
        {announcements.map(announcement => (
          <li key={announcement.id} className="list-group-item">
            <h5>{announcement.title}</h5>
            <p>{announcement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
