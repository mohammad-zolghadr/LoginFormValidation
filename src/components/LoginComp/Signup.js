import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Login.module.css';
import MyInput from './MyInput';
import ReCaptcha from '../ReCaptcha';
import CheckValidation from '../../CheckValidation';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const [showError, setShowError] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {}, [data, error]);

  const validationHandler = () => {
    setError(CheckValidation(data, 'signup'));
    setShowError(true);
  };

  const inputHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (
      !error.email &&
      !error.password &&
      !error.confirmPassword &&
      !error.username &&
      error.isAccepted
    ) {
      alert('Signup Successfully');
    } else {
      validationHandler();
    }
  };

  return (
    <>
      <main>
        <form onSubmit={submitForm}>
          <h2>Hi Friend</h2>
          <MyInput
            showError={showError}
            onBlurInput={validationHandler}
            error={error.username}
            label="UserName"
            type="text"
            name="username"
            value={data.name}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError}
            onBlurInput={validationHandler}
            error={error.email}
            label="Email"
            type="email"
            name="email"
            value={data.email}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError}
            onBlurInput={validationHandler}
            error={error.password}
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError}
            onBlurInput={validationHandler}
            error={error.confirmPassword}
            label="confirmPassword"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError}
            onBlurInput={validationHandler}
            error={error.isAccepted}
            label="I Accept Privacy & Policy (Click to read)"
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChangeMethod={inputHandler}
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
