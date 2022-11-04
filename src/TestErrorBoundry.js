
import React, { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import "./index.css"
const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div className='errorTestcontainer' >
      <p>Something went wrong:</p>
      <p> {error.message} </p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


const TestErrorBoundry = () => {
  const [name, setName] = useState("")
  const value = useRef()

  const test = () => {
    setName(value.current.value)
  }

  function ErrorTest({ name }) {
    if (name === 'error') {
      throw new Error('💥 Fixing bug please bear with us 💥')
    }
    return ` ${name}`
  }

  return (

    <>


      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {
        setName(" ")
      }}
        resetKeys={[name]}
      >
        <div className='errorTestcontainer'>
          <p> Type in the word "error" to test error boundry</p>
          <input type="text" placeholder='Enter error' ref={value} onChange={test} />
          <ErrorTest name={name} />
        </div>


       

      </ErrorBoundary>

    </>




  )
}

export default TestErrorBoundry
