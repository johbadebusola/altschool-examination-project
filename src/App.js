import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { signOutOfGoogle, auth } from "./firebase"
import './App.css';
import ErrorBoundry from './ErrorBoundry';
import { signInWithGoogle, GoogleAuthProvider } from "./firebase"
import "./index.css"
import person1 from "./person1.jpg"
import person2 from "./person2.jpg"
import person3 from "./person3.jpg"
import User from './User'
import Home from './Home'
import ErrorPage from './ErrorPage'
import "./index.css"
import 'swiper/css'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
  const [signedIn, setSignedIn] = useState(true)
  const [name, setName] = useState("user")
  const [image, setImage] = useState()
  const signIn = () => {
    signInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //   let name = user.displayName
        const profilePics = user.photoURL
        setImage(profilePics)
        console.log(user.photoURL)
        console.log(user.displayName)
        setName(user)

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
      return setSignedIn(true);
    }
    setSignedIn(false)
  })
  if (signedIn === true) {

    return (

      < >
        <div className='banner'>
          <h2 >Userxiffy</h2>
          <div className='emailId'>
            <p> Hi, {name.displayName} </p>
            <img src={image} alt="img" />
          </div>



        </div>

        <nav className='nav'>

          <ul>
            <li> <Link to="/">HOME</Link> </li>
            <li> <Link to="user" > USER </Link> </li>
            <li onClick={signOut}>
              <a href='#'>  Sign Out </a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>


      </>
    )
  } else {
    return (
      < >
        <div className='signInWrapper'>
          <h2 >Userxiffy</h2>

          <Swiper className='swiper1'
            modules={[Pagination]}
            spaceBetween={2}
            slidesPerView={1}
            pagination={{ clickable: true }}
       
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='slider'>
              <div className='slider-wrapper'>
                <img src={person1} alt="welcome" />
              </div>

            </SwiperSlide>
            <SwiperSlide className='slider'>
              <div className='slider-wrapper'>
              <img src={person2} alt="welcome" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slider'>
            <div className='slider-wrapper'>
              <img src={person3} alt="welcome" />
              </div>
            </SwiperSlide>


          </Swiper>

          <div className='signIn-cont'>
            <button className='signInButton' onClick={signIn} >
              Sign in with google
            </button>
          </div>
        </div>

      </>
    )
  }

}

export default App;
