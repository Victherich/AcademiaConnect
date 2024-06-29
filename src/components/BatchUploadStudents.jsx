import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import ManagementDashboard from './ManagementDashboard';
import { FaFileUpload } from 'react-icons/fa';

const BatchUploadStudents = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire({ icon: 'error', text: 'Please select a file', showConfirmButton: true });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const url = ""; // Define your URL here

    const loadingAlert = Swal.fire({
      title: 'Loading',
      text: 'Please wait...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();

    try {
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      loadingAlert.close();
      Swal.fire({ icon: 'success', text: 'Students uploaded successfully', showConfirmButton: false, timer: 2000 });
    } catch (error) {
      console.error(error);
      loadingAlert.close();
      Swal.fire({ icon: 'error', text: 'Something went wrong', showConfirmButton: true });
    }
  };

  return (
    <div className="Style1">
      <ManagementDashboard />
      <h2>Batch Upload Students</h2>
      <form className="Style2" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="file"
            className="form-control"
            id="file"
            name="file"
            hidden
          />
          <label htmlFor="file" style={{ width: '100px', height: '100px', backgroundColor: 'lightgray', cursor: 'pointer' }}>
            {file ? (
              <p>{file.name}</p>
            ) : (
              <FaFileUpload style={{ fontSize: '4rem', color: 'white', marginTop: '10px' }} />
            )}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default BatchUploadStudents;
