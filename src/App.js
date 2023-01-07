import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { signOutOfGoogle, auth } from "./firebase"
import './App.css';
import TestErrorBoundry from './TestErrorBoundry';
import ErrorBoundary from './ErrorBoundry';
import { signInWithGoogle, GoogleAuthProvider } from "./firebase"
import "./index.css"
import back1 from "./back1.svg"
import googleIcon from "./googleicon.png"
import logout from "./logout.png"
import Homes from "./Home.png"
import User from './User'
import Home from './Home'
import Nav from './Routes';
import ErrorPage from './ErrorPage'
import "./index.css"


function App() {
  const [signedIn, setSignedIn] = useState(false)
 
  const signIn = () => {
    signInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("userData", user.displayName)
        localStorage.setItem("userImg", user.photoURL)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }


  const signOut = () => {
    signOutOfGoogle()
   
      .then(() => {
        console.log("sign out successful")
     
    
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
     
  }


 

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user)

      setSignedIn(true);
    } else {
      setSignedIn(false)
    }

  })
  if (signedIn === true) {

    return (

      < >
        <ErrorBoundary>
          <div className='banner'>
            <h2 >Userxiffy</h2>
            <div className='emailId'>
              <p> Hi, {localStorage.getItem("userData")} </p>
              <img src={localStorage.getItem("userImg")} alt="img" />
            </div>



          </div>

          <nav className='nav'>

            <ul>
              <li> <Link to="/"><img className='nav-img' src={Homes} alt="logout" /></Link> </li>
              <li className='user'>  <Link to="user" > USER </Link> </li>
              <li onClick={signOut}>
                <a href='#'>
                <img className='nav-img' src={logout} alt="logout" /> 
                </a>
              
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='user' element={<User />} />
            <Route path='errorboundry' element={< TestErrorBoundry />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>

      </>
    )
  } else {

    

    return (
      < >
        <ErrorBoundary>
          <div className='signin-grid'>
            <div className='signin-grid1'>
              <img src={back1} alt="welcome" />

            </div>


            <div className='signin-grid2'>

              <h3> WELCOME </h3>
              <div>
                <Nav />
              
              </div>
              <p> To keep connected with us please sign in with google</p>
              <button className='signInButton' onClick={signIn} >
                <img src={googleIcon} alt="google" /> --
              </button>

            </div>
          </div>
        </ErrorBoundary>
      </>
    )
  }

}

export default App;

