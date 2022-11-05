import React from 'react'
import Helmet from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import img2 from "./img2.svg"
import img3 from "./img3.svg"
import img4 from "./img4.svg"
import img6 from "./img6.svg"
import img7 from "./img7.svg"

import "./index.css"

const Home = () => {
const navigate = useNavigate()

const test = () =>{
navigate("/errorboundry")

}
  return (
    <>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='description' content=' Home page for userxiffy app' />
      <title> userxiffy Homepage  </title>
    </Helmet>
<button className='errorTest' onClick={test} > Click to test Error boundry </button>
      <p className='home-head'> Click on the user tab to view the list of people who use our service.</p>
      <div className='home-img'>
        <div>
          <img className='img1' src={img7} alt="person1" />
          <p className='home-p'> The listed Users of the account can like messages from other user</p>
        </div>

        <div>
          <img className='img1' src={img2} alt="person2" />
          <p className='home-p'> The listed Users of the account can send emails to eachother </p>
        </div>

        <div>
          <img className='img1' src={img3} alt="person3" />
          <p className='home-p'> The listed Users of the account can send emails to eachother </p>
        </div>

        <div>
          <img className='img1' src={img4} alt="person4" />
          <p className='home-p'> Feedback from our users is also required for better services</p>
        </div>

        <div>
          <img className='img1' src={img6} alt="person5" />
          <p className='home-p'> The listed Users can also give a review of the product purchased or services rendered </p>
        </div>

        <div>
          <img className='img1' src={img7} alt="person6" />
          <p className='home-p'> The listed Users of the account can send emails to eachother </p>
        </div>

      </div>
      <hr />
  
      
    </>
  )
}

export default Home