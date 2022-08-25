import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Login.module.css';
import MyInput from './MyInput';
import ReCaptcha from '../ReCaptcha';
import CheckValidation from '../../CheckValidation';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [showError, setShowError] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {}, [data, error]);

  const validationHandler = () => {
    setError(CheckValidation(data, 'login'));
    setShowError(true);
  };

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!error.email && !error.password) {
      alert('Login Successfully');
    } else {
      validationHandler();
    }
  };

  return (
    <>
      <main>
        <form onSubmit={submitForm}>
          <h2>Wellcome Back Friend</h2>
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
