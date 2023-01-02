import React, { useRef, useState } from "react";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
const navigate = useNavigate()
  const userEmail = useRef()
  const userPassword = useRef()
  const userFirstname = useRef()
  const userLastname = useRef()
  const [error, setError] = useState()
  const submit = async (event) => {
    event.preventDefault()
    const firstname = userFirstname.current.value
    const lastName = userLastname.current.value
    const fullName = firstname + " " + lastName
    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value);
      // Signed in 
      const user = userCredential.user;
      localStorage.setItem("userData", user.email)
      localStorage.setItem("userImg", user.photoURL)
      updateProfile(auth.currentUser,{
        displayName:fullName
      }).then(()=>{
        console.log("displayNname updated")
        navigate("/")
      })
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode);
      if (errorCode === "auth/network-request-failed") {
        setError("No internet connection")
    }
    if (errorCode === "auth/invalid-email") {
        setError("Invalid Email")
    }
    if (errorCode === "auth/weak-password") {
        setError("Password is too short")
    }
    
    }


  }



  return (
    <>
      {/* <Routes>
        
        <Route path="/signin" element={<Login />} />
      </Routes> */}
      <div className="body">
      <div className='container'>
      <div className="login">
      <h3>Signup</h3>
      <p className='errorMessages'>{error}</p>
        <input type="text" ref={userFirstname}
          placeholder="Firstname" />


        <input type="text" ref={userLastname}
          placeholder="Lastname" />

        <input type="email" ref={userEmail}
          placeholder="email" />
        <input type="password" ref={userPassword} placeholder="password" />
        <button onClick={submit}> Signup</button>
        <p className='p1'> Already have an account ?  <span > <Link to="/login"> Login</Link> </span> </p>
       
        </div>
        </div>
      </div>


    </>
  )
}

export default Signup