import React from 'react'
import ErrorBoundry from './ErrorBoundry';
import "./index.css"
function Userdata({data,loading,error}) {

  const userId = data.map((users) => (
    <div className='grid' key={users.name.first} >
      <div className="user-container">
      <img className='user-img' src={users.picture.medium} alt="cat"/>
      <div className='grid2' >
      <h2 className='user-h2' > {users.name.title} {users.name.first} {users.name.last} </h2>
       <h4 className='user-h4' > Gender: {users.gender}</h4>
       <p className='user-p1' > Country: {users.location.country} </p>
       <p className='user-p2' >Telephone: {users.cell} </p>
      </div>
       

      </div>
     
    </div>

    
   
  ))
  return (
    <>

    {
     
     loading ?  (<div className='all'>{userId}  </div> ) : (<div className='loader-wrapper'><div class="loader"></div> </div>)
   }
   <ErrorBoundry>
   <h1>{error} </h1>
    </ErrorBoundry>
   
    </>
  )
}

export default Userdata