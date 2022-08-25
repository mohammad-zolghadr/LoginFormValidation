import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Login.module.css';
import MyInput from './MyInput';
import ReCaptcha from '../ReCaptcha';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <form onSubmit={submitForm}>
          <h2>Wellcome Back Friend</h2>
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

          <ReCaptcha />
          <div className={style.bPart}>
            <button type="submit">Login</button>
            <Link to="/signup">You don't have an account?</Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
