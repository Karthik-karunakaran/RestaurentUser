import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
      <div className='register-form-overall'>
        <div className='register-form'>
          <form action="">
            <h2>SignUp Page</h2>
            <input type="text" className='form-input' placeholder='Name' /> <br />
            <input type="text" className='form-input' placeholder='Email or Phone' />
            <input type="password" className='form-input' placeholder='Password' />
            <div className='mt-4 d-flex gap-3 justify-content-center align-items-center'>
              <input type="checkbox" />
              <p className='mt-2'> I agree all <span className=''><a href="">terms and condition</a></span></p>
            </div>
            <button className='mt-4'>Submit</button>
            {/* <p className='text-center mt-3 '>Not a Member? <span><Link>signup now</Link></span></p> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
