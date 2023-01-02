import React, { useRef, useState } from 'react';
import "./index.css"
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const userEmail = useRef()
    const userPassword = useRef()
    const auth = getAuth(app);
    const [error, setError] = useState()
 const navigate = useNavigate()

    const signIn = () => {

        signInWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
         localStorage.setItem("userData", user.displayName)
      localStorage.setItem("userImg", user.photoURL)
                console.log(user)
                navigate("/")
                // ...
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)

                console.log(errorCode)

                if (errorCode === "auth/network-request-failed") {
                    setError("No internet connection")
                }
                if (errorCode === "auth/invalid-email") {
                    setError("Invalid Email")
                }
                if (errorCode === "auth/user-not-found") {
                    setError("Create an account")
                }
                if (errorCode === "auth/wrong-password") {
                    setError("Wrong password")
                }
            });
    }


    return (
        <>

            <div className='body'>

                <div className='container'>

                    <div className="login">
                        <h3>Log in into your Account</h3>
                        <p className='errorMessages'>{error}</p>
                        <input type="email" placeholder="Email" ref={userEmail} />
                        <input type="password" placeholder="Password" ref={userPassword} />

                        <button onClick={signIn} > Login </button>
                        <p className='p1'> New Here ?  <span > <Link to="/"> signup</Link> </span> </p>
                    
                    </div>
                </div>
            </div>



        </>
    )
}



export default Login