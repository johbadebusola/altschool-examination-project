import React, { useState } from 'react'
import { signInWithGoogle ,GoogleAuthProvider} from "./firebase"

import img2 from "./img2.svg"
import img3 from "./img3.svg"
import img4 from "./img4.svg"
import img6 from "./img6.svg"
import img7 from "./img7.svg"
import "./index.css"
 const Home = () => {
const [name,setName] = useState("user")
  const signIn = () => {
    signInWithGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      let name = user.displayName
      const profilePics = user.photoURL
      console.log(user.email )
      console.log(user.displayName)
      setName(user)
      localStorage.setItem("name",name )
      localStorage.setItem("picture",profilePics)
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

  console.log(name.email)
  return (
    <>
    
    <div className='googleUser'>
    <h5 className='googleUserName'> {localStorage.getItem("name")} </h5>
    <img className='googleUserPicture' src={localStorage.getItem("picture")} alt="userPics" />
    </div>
    
    <h4 className='home-head'> Click on the user tab to view the list of people who uses our service.</h4>
   <div className='home-img'>
    <div>
    <img  className='img1' src={img7}  alt="person1"/>
    <p className='home-p'> The listed Users of the account can like messages from other user</p>
    </div>

    <div>
    <img  className='img1' src={img2} alt="person2"/>
    <p className='home-p'> The listed Users of the account can send emails to eachother </p>
    </div>

    <div>
    <img  className='img1' src={img3} alt="person3"/>
    <p className='home-p'> The listed Users of the account can send emails to eachother </p>
    </div>

    <div>
    <img  className='img1' src={img4} alt="person4" />
    <p className='home-p'> Feedback from our users is also required for better services</p>
    </div>

    <div>
    <img  className='img1' src={img6} alt="person5"/>
    <p className='home-p'> The listed Users can also give a review of the product purchased or services rendered </p>
    </div>

    <div>
    <img  className='img1' src={img7} alt="person6" />
    <p className='home-p'> The listed Users of the account can send emails to eachother </p>
    </div>

   </div>
   <hr className='hr'></hr>
   <div className='signInBackground'>
   <p> Sign in With</p>
     
    </div>
  
    <button className='signInButton' onClick={signIn} >
       google
      </button>
   </>
  )
}

export default Home