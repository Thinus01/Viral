import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/login', {
        user: {
          email: email,
          password: password
        }
      });

      console.log('Signin successful', response.data);
    } catch (error) {
      console.error('Signin failed', error.response.data);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/signup', {
        user: {
          name: name,
          email: email,
          password: password
        }
      });
      console.log('Signup Successful', response.data);
    } catch (error) {
      console.error('Signup Failed', error.response.data);
    }
  };

  return (
    <>
      <div id='SignIn'>
        <p>Sign in</p>
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='SignButton' type='button' onClick={handleSignIn}>
          Submit
        </button>
      </div>
      <div id='SignUp'>
        <p>Sign up</p>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='SignButton' type='button' onClick={handleSignUp}>
          Submit
        </button>
      </div>
    
    </>

  );
};
