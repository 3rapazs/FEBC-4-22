import React from 'react'
import { useState } from 'react';
import Button from './Button';

function Login() {

const [userName,setUserName] = useState<string>("");
const [password,setPassword] = useState<string>("");


const OnChnageUserName = (event:React.ChangeEvent<HTMLInputElement>) => {
  setUserName(event.target.value);
};

const OnChnagePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value);
};

const OnSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
  console.log(userName);
  console.log(password);

};

  return (
    <>
    <form onSubmit={OnSubmit}>
        <div>

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" 
          onChange={OnChnageUserName} 
         
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" 
          onChange={OnChnagePassword}/>
        </div>
        <Button />
      </form>
    </>
  );
}

export default Login