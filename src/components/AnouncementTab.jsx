import React, { useEffect, useState } from 'react';
import "../CSS/Announcement.css"
import ManagementDashboard from './ManagementDashboard';

// Sample Announcement Data
const initialAnnouncements = [
  { id: 1, title: "School Reopening", content: "School will reopen on September 1st." },
  { id: 2, title: "Parent-Teacher Meeting", content: "Parent-Teacher meeting is scheduled for August 25th." }
];

const Announcements = () => {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  const handlePost = () => {
    if (newAnnouncement.title && newAnnouncement.content) {
      const newEntry = { ...newAnnouncement, id: announcements.length + 1 };
      setAnnouncements([newEntry,...announcements ]);
      setNewAnnouncement({ title: "", content: "" });
    }
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

// const [REArray,setREArray]=useState([])
//   useEffect(()=>{
//     setREArray([...announcements.reverse()])
//   },[])

  return (

    <div className='Style1'>
      <ManagementDashboard/>
      <h2>Announcements</h2>
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={newAnnouncement.title}
          onChange={handleChange}
          placeholder="Announcement Title"
          className="form-control"
          style={{ marginBottom: '10px' }}
        />
        <textarea
          name="content"
          value={newAnnouncement.content}
          onChange={handleChange}
          placeholder="Announcement Content"
          className="form-control"
          style={{ marginBottom: '10px' }}
        />
        <button onClick={handlePost} className="btn btn-primary">Post Announcement</button>
      </div>
      <ul className="list-group">
        {announcements.map(announcement => (
          <li key={announcement.id} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',textAlign:"left" }}>
            <div>
              <h5>{announcement.title}</h5>
              <p>{announcement.content}</p>
            </div>
            <button onClick={() => handleDelete(announcement.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
