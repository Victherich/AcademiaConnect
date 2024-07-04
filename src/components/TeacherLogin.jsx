import React, { useContext, useState } from 'react'
import "../CSS/Login.css"
import { Context } from './Context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TeacherLogin = () => {
    const {student,setStudent,setTeacher}=useContext(Context)
    const [formData,setFormdata]=useState({email:"",password:""})
    const navigate=useNavigate()

    console.log(formData)

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try{
            const response = axios.post("",formData)
            console.log(response.data)
            setTeacher(true)
            navigate("/teachersdashboard")
        }catch(error){
            console.error(error)
        }
    }

  return (
    <div className='maincont'>
        <div className='logincontainer'>
          <h1>TEACHER LOGIN</h1>
          <form onSubmit={handleSubmit}>
              <div className='form1'>
                  <label htmlFor="email">Email</label>
                  <input type="text" required value={formData.email} onChange={(e)=>setFormdata({...formData,email:e.target.value})}/>
              </div>
              <div className='form1'>
                  <label htmlFor="password">Password</label>
                  <input type="text" required value={formData.password} onChange={(e)=>setFormdata({...formData,password:e.target.value})}/>
              </div>
              <button type="submit" className='LoginButton'>Login</button>
          </form>
          <p style={{textAlign:"center",cursor:"pointer"}} onClick={()=>navigate("/")}>Go Home</p>
        </div>
    </div>
  )
}

export default TeacherLogin
