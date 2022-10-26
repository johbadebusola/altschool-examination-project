import React from 'react'
import error from  "./error404.svg"
function ErrorPage() {
  return (
    <div className='container1'>
        <img  className='error404' src={error} alt='error404' />
        <h3 className='error-text'>PAGE NOT FOUND</h3>
    </div>
    
  )
}

export default ErrorPage