import React, { useState  } from 'react'
import './login.css'

const Login = () => {

  const [signState, setSignState] = useState("Login");

  return (
    <div className="login-wrapper">
    <div className='container_l'>
        
        <form>
          {signState ==="Login" ? 
          
          <h1><center>Login</center></h1>
          
          :
          <>
          <h1><center>Sign In</center></h1>
          <label className='title'>User Name</label>
          <input type="text" className="form-control" placeholder='Username' /></>}
          <div className="mb-3">
              <label className='title'>Email address</label>
              <input type="email" className="form-control" placeholder='Email'/>
              <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
              <label className='title'>Password</label>
              <input type="password" className="form-control" placeholder='Password'/>
          </div>
          <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input"/>
              <label>Remember Me</label>
          </div>
          <button type="submit" className="but">Submit</button>
          </form>
          <div className='form-switch'>
            {signState ==="Login" ? 
            <p>New User? <span onClick={()=>setSignState("Sign Up")}>SignIn Now.</span></p>
            :
            <p>Already have an account? <span onClick={()=>setSignState("Login")}>Login Now.</span></p>}
          </div>
    </div>
    </div>
  )
}

export default Login
