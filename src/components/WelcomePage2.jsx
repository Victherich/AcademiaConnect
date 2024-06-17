import React from 'react'
import "../CSS/WelcomePage2.css"
import { useNavigate } from 'react-router-dom'

const WelcomePage2 = () => {
    const navigate = useNavigate()
  return (
    <div className='WelcomePage'>
        <div className="WelcomeWrap">
            <div className="Contain">

                <div className="Logo">
                    <h1>ACADEMIA<span>CONNECT</span></h1>
                </div>

                <div className="Text">
                    <h1>WELCOME TO ACADEMIA CONNECT</h1>
                    <p>We ensure a better education for a better world</p>
                </div>

                <div className="Buttons">
                    <button className='Btn' onClick={()=>navigate("/studentdashboard")}>
                        Student
                    </button>
                    <button className='Btn' onClick={()=>navigate("/students")}>
                        School Admin
                    </button>

                    <button className='Btn' onClick={()=>navigate("/")}>
                        Home
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WelcomePage2