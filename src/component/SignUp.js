import React from 'react';
import './SignUp.css'; 

const SignUp = () => {
  return (
    <div className='sign'>
      <h2>Sign Up Page</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Create a password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
