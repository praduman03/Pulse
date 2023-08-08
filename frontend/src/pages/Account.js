import React from 'react'

const Account = () => {
  return (
    <div className='login-wrapper'>
      <div className='login-section'>
        <div className='avatar-container'></div>
        <div className='form-container'>
            <div className='type-switch'>
                <div>Signup</div>
                <div>Login</div>
            </div>

            <label htmlFor="input">Email or Username<input type="text" placeholder='Enter Email or Username...' /></label>
            <label htmlFor="input">Password<input type="password" placeholder='Password...' /></label>

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

export default Account
