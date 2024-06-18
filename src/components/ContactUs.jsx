
import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
import Swal from 'sweetalert2'
import { FaBackward } from 'react-icons/fa6'
import axios from 'axios'
import Logo from "../Images/serious-confident-business-leader-speaking-cellphone.png"

const ContactUs = () => {
    const [formData, setFormData] = useState({orderName:"General Message",
        fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", message: "", 
    });

    console.log(formData)
    const [isValid, setIsValid] = useState(false);
    const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
    const [openSubmit,setOpenSubmit]=useState(false)
    const [fullNameError,setFullnameError]=useState("")
    const [emailError,setEmailError]=useState("")
    const [phoneNumberError,setPhoneNumberError]=useState("")
    const [addressError,setAddressError]=useState("")
    const [messageError,setMessageError]=useState("")



    const [enablealidation,setEnablealidatio]=useState(false)
    useEffect(() => {
        if(enablealidation===true){
            handleIsValid();
        }
    }, [formData]);

    const handleIsValid = () => {
        let isValid = true;

        if (formData.fullName==="") {  
            setFullnameError("Please enter your full name")
            isValid = false;
        } else {
            setFullnameError("")
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {  
            setEmailError("Please enter your valid email address")
            isValid = false;
        } else {
            setEmailError("")
        }

        if (formData.phoneNumber==="") {  
            setPhoneNumberError("Please enter your phone number")
            isValid = false;
        } else {
            setPhoneNumberError("")
        }

        if (formData.phoneNumber !== formData.confirmPhoneNumber) {
            setConfirmPhoneNumberError("Phone numbers do not match");
            isValid = false;
        } else {
            setConfirmPhoneNumberError("");
        }

        if (formData.address==="") {  
            setAddressError("Please enter your address")
            isValid = false;
        } else {
            setAddressError("")
        }

        if (formData.message==="") {
            setMessageError("please enter your message");
            isValid = false;
        } else {
            setMessageError("");
        }

        setIsValid(isValid);
    }

    const handleOpenSubmit = async() => {
        await handleIsValid();
        setEnablealidatio(true)
        if (isValid){
            setOpenSubmit(true)
        }
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
            const loadingAlert = Swal.fire({
                title: "Loading",
                text: "Please wait...",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false
              });
        
              Swal.showLoading();
    }

const handleLocation =()=>{
    window.history.back()
}

useEffect(()=>{
    if(formData.message!==""){
        setEnablealidatio(true)
    }
},[[formData]])

const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // Function to handle window load event
    const handleLoad = () => {
      setIsLoading(false); // Set loading state to false when window finishes loading
    };

    // Attach event listener for window load
    window.addEventListener('load', handleLoad);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); 

  return (
    <div className='ContactUsWrap'>
        <div className='ContactUs'>
            <div className='ContactUsHeader'>
                <h1>Contact Us</h1>
            </div>
        <div className='ContactUsBody'>
                
                <div className='ContactUsBodyLeft'>
                    <form action="https://formsubmit.co/hadassahpremium247@gmail.com" method="POST">
                        <input type="text" name="Order Name" value={formData.orderName} hidden/>
                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Full Name:</p>
                                <input type="text" name="Full Name" value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} placeholder='Eg. John Ani' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{fullNameError}</p>
                        </label>
                        
                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Email address:</p>
                                <input type="text" name="Email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='example@gmail.com' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{emailError}</p>
                            </label>

                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Phone number:</p>
                                <input type="text" name='Phone Number' value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} placeholder="Eg. 07063448446" required/>
                            </div>    
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{phoneNumberError}</p>
                        </label>

                        <label>
                                <div className="InputLabelChild" >
                                    <p>Confirm Phone no.:</p>
                                    <input type="text" value={formData.confirmPhoneNumber} onChange={(e)=>setFormData({...formData,confirmPhoneNumber:e.target.value})} placeholder="confirm phone number" required />
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                                
                            </label>
                            
                        <label>
                            <div className='InputLabelChild'>
                                 <p>Enter Complete address information:</p>
                                <input type="text" name="Address" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} placeholder="Eg No. 28 Albert street Surulere Lagos state Nigeria" required />
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{addressError}</p>
                        </label>

                        <div className='TextAreaWrap'>
                            <div className='InputLabelChild'>
                                <p>Message:</p>
                                <textarea type="text" name="Message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{messageError}</p>
                            </div>
                        <div className='SubmitButtonWrap'>
                                    <button type="button" onClick={handleOpenSubmit}>Proceed</button>
                            </div>

                            {openSubmit&&
                            <div className='FormSubmitUiWrap'>
                                <div className='FormSubmitUi'>
                                <p>Thank you for contacting Hadassah Premium, please click the <span style={{fontWeight:"bold",color:"green"}}>Submit now</span> button and one of our representatives shall contact you as soon as possible. Thanks </p>
                                <button type="submit">Submit Now</button>
                                <p onClick={()=>setOpenSubmit(false)} style={{cursor:"pointer"}}>X</p>
                            </div>
                            </div>
                            }
                        
                        
                    </form>

       
                </div>
                <div className='ContactUsBodyRight'>
                    {isLoading&&<img src={Logo} alt="Contact us"/>}

         
                </div>
        </div>
                <div className='BackButtonWrap'>
                    <button 
                    onClick={handleLocation}
                    ><FaBackward/> Back</button>
                </div>
            </div>
    
    </div>
  )
}

export default ContactUs


