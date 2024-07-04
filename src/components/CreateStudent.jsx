

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; // Make sure axios is imported
import ManagementDashboard from './ManagementDashboard';
import { FaUser } from 'react-icons/fa';

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    profileImg: "",
    fullName: "",
    dob: "",
    address: "",
    class: "",
    phone: "",
    email: "",
    note: ""
  });

  console.log(formData)

  const [picPreview, setPicPreview] = useState(() => < FaUser style={{fontSize:"4rem",color:"white",marginTop:"10px"
  }}/>);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImg') {
      const file = files[0];
      setFormData({ ...formData, profileImg: file });
      handlePicPreview(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePicPreview = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = ""; // Define your URL here

    const formDataA = new FormData();
    formDataA.append('fullName', formData.fullName);
    formDataA.append('email', formData.email);
    formDataA.append('phone', formData.phone);
    formDataA.append('address', formData.address);
    formDataA.append('dob', formData.dob);
    formDataA.append('class', formData.class);
    formDataA.append('profileImg', formData.profileImg);
    formDataA.append('note', formData.note);

    const loadingAlert = Swal.fire({
      title: 'Loading',
      text: 'Please wait...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();

    try {
      const response = await axios.post(url, formDataA, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      loadingAlert.close();
      Swal.fire({ icon: 'success', text: 'Student created', showConfirmButton: false, timer: 2000 });
    } catch (error) {
      console.error(error);
      loadingAlert.close();
      Swal.fire({ icon: 'error', text: 'Something went wrong', showConfirmButton: true });
    }
  };

  return (
    <div>
      <ManagementDashboard />
    <div className="Style1">
      
      <h2>Create Student</h2>
      <form className="Style2" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="file"
            className="form-control"
            id="profileImg"
            name="profileImg"
            hidden
          />
          <label htmlFor="profileImg" style={{ width: '100px', height: '100px', backgroundColor: 'lightgray', cursor: 'pointer' }}>
            {typeof picPreview === 'string' ? (
              <img src={picPreview} alt="Profile Preview" style={{ width: '100%', height: '100%' }} />
            ) : (
              picPreview
            )}
          </label>
        </div>
        <div className="form-group" style={{ display: 'flex' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ display: 'flex' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <select className="form-control" onChange={handleChange} name="class" value={formData.class} required>
            <option value="">--select class--</option>
            <option value="1st Grade">1st Grade</option>
            <option value="2nd Grade">2nd Grade</option>
            <option value="3rd Grade">3rd Grade</option>
            <option value="4th Grade">4th Grade</option>
            <option value="5th Grade">5th Grade</option>
            <option value="6th Grade">6th Grade</option>
          </select>
        </div>
        <div className="form-group" style={{ display: 'flex' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Guardian Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Guardian Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Note"
            name="note"
            value={formData.note}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
    </div>
  );
};

export default CreateStudent;
