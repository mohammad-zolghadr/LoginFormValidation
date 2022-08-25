import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Login.module.css';
import MyInput from './MyInput';
import ReCaptcha from '../ReCaptcha';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confrimPassword: '',
    isAccepted: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const inputHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <form onSubmit={submitForm}>
          <h2>Hi Friend</h2>
          <MyInput
            label="UserName"
            type="text"
            name="username"
            value={data.name}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="Email"
            type="email"
            name="email"
            value={data.email}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="ConfrimPassword"
            type="password"
            name="confrimPassword"
            value={data.confrimPassword}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="I Accept Privacy & Policy (Click to read)"
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={inputHandler}
          />
          <ReCaptcha />
          <div className={style.bPart}>
            <button type="submit">Sign Up</button>
            <Link to="/login">Already has an account?</Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
