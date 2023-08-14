import React, { useState } from 'react'
//import LoginBg from '../assets/blob-scene-haikei.svg'
import LoginBg from '../assets/login-bg.png'

const Account = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className='login-wrapper'>
      <div className='login-section'>
        <img src={LoginBg} alt="" className='login-bg'/>
        <button onClick={() => setDark(!dark)}>Toggle</button>
        <div className='bg-img'>
        </div>
        <div className='avatar-container'></div>
        <div className='form-container'>
            <div className='type-switch'>
                <div>Signup</div>
                <div>Login</div>
            </div>

            <span>Email or Username</span> <input type="text" placeholder='Enter Email or Username...' />
            <span>Password</span><input type="password" placeholder='Password...' />

            <span>Forgot Password?</span>

            <div>
              <div className='login-btn'>Login</div>
              <span>OR</span>
              <div className='google-btn'>Continue with Google</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Account;
