import {React, Component} from "react"
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
  
    static getDerivedStateFromError(error) {
     
      return {error};
    }
  
    componentDidCatch(error, errorInfo) {
      
console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.error) {
       
        return (
          <>
          <div style={{color:"red",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
          <h1 style={{color:"red"}}>Something went wrong </h1>
         <p style={{color:"black"}}> Fixing bugs, please bear with us </p>
          </div>
         
          </>
       

        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary