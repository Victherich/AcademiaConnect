import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Img1 from "../Images/Img1.jpg"
import BackButton from './BackButton';

const StudentDetails = () => {
  const { id } = useParams();
  // Fetch student details using the id

  const students = {
    id: 1,
    profileImg: Img1,
    fullName: "John Doe",
    dob: "2008-05-14",
    address: "123 Main St, Springfield",
    class: "5th Grade",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    note: "Allergic to peanuts"
    
  }



  const [formData, setFormData] = useState({
    profileImg: students.profileImg,
    fullName:students.fullName,
    dob: students.dob,
    address: students.address,
    class: students.class,
    phone: students.phone,
    email: students.email,
    note: students.note
  });

  console.log(formData)

  const [picPreview, setPicPreview] = useState(Img1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      setFormData({ ...formData, profileImg: files[0] });
      handlePicPreview(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePicPreview = (file) => {
    setPicPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url=""
      
      const formDataA = new FormData();
      formDataA.append("fullName", formData.fullName);
      formDataA.append("email", formData.email);
      formDataA.append("phoneNumber", formData.phoneNumber);
      formDataA.append("address", formData.address);
      formDataA.append("dob", formData.dob);
      formDataA.append("class", formData.class);
      formDataA.append("profileImg", formData.profileImg);
      formDataA.append("note", formData.note);
 

      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
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
        Swal.fire({icon:"success",text:"student created",showConfirmButton:false,timer:2000})


      } catch (error) {
        console.error(error);
        loadingAlert.close();
        if(error){
          // navigate("/emailredirectpage")
          Swal.fire({icon:"error",text:"something went wrong",showConfirmButton:true})
        }
      }
    } 

const [onChangeSwitch,setOnchangeSwitch]=useState(false)
const [isChecked,setIshecked]=useState(false)




  return (
    <div className='Style1'>
      <h2>Student {id} Details</h2>
      <form className='Style2' onSubmit={handleSubmit}>
        {/* Form fields for creating a student */}
        <div className="form-group">
          <input
            onChange={onChangeSwitch?handleChange:null}
            type="file"
            className="form-control"
            id="profileImg"
            name="profileImg"
            hidden
          />
          <label htmlFor='profileImg' style={{ width: "100px", height: "100px",backgroundColor:"lightgray",cursor:"pointer" }}>
            <img src={picPreview} alt="student profile photo" style={{ width: "100%", height: "100%" }} />
          </label>
        </div>
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="fullName"
            value={formData.fullName}
            onChange={onChangeSwitch?handleChange:null}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={onChangeSwitch?handleChange:null}
          />
        </div>
        
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={onChangeSwitch?handleChange:null}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Class"
            name="class"
            value={formData.class}
            onChange={onChangeSwitch?handleChange:null}
          />
        </div>
        
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Guardian Phone"
            name="phone"
            value={formData.phone}
            onChange={onChangeSwitch?handleChange:null}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Guardian Email"
            name="email"
            value={formData.email}
            onChange={onChangeSwitch?handleChange:null}
          />
        </div>
      
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Note"
            name="note"
            value={formData.note}
            onChange={onChangeSwitch?handleChange:null}
          />
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",gap:"5px"}}>
          <input type="checkbox" style={{cursor:"pointer"}}
          onClick={()=>{setIshecked(!isChecked);setOnchangeSwitch(!onChangeSwitch)}}/> 
          <span>Enable Edit</span>
          </div>

        {isChecked&&<button type="submit" className="btn btn-primary">Update</button>}
      </form>
      <BackButton/>
    </div>
  );
};


export default StudentDetails;
