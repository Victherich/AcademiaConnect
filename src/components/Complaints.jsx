import React, { useState } from 'react';

const Complaints = ({ sendComplaint }) => {
  const [complaint, setComplaint] = useState("");

  const handleChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendComplaint(complaint);
    setComplaint("");
  };

  return (
    <div>
      <h2 style={{color:"red"}}>Make a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            value={complaint}
            onChange={handleChange}
            placeholder="Write your complaint here..."
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Complaints;
