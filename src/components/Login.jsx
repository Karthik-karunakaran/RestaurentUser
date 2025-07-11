import React from 'react'
import './Login.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Signup from './Signup';
const Login = () => {
    return (
        <>
         <div className='login-form-overall'>
                <div className='login-form'>
                    <form action="">
                        <h2>Login Page</h2>
                            <input type="text"  placeholder='Email or Phone' />
                            <input type="password"   placeholder='Password' />
                            <div className='my-3 text-center'>
                                <a href="" className='forgot-pass '>Forgot Password?</a> <br />
                            </div>
                        <button>Submit</button>
                        <p className='text-center mt-3 '>Not a Member? <span><a href="./Signup">signup now</a></span></p>
                    </form>
                </div>
         </div>
        </>
    )
}

export default Login
