import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './Login.module.css';
import MyInput from './MyInput';
import CheckValidation from '../../CheckValidation';

const Login = () => {
  const notify = (text, type) => (type ? toast.success(text) : toast.error(text));

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [visiblilityPassword, setVisiblilityPassword] = useState({
    visible: 'password',
  });

  const [showError, setShowError] = useState({
    email: false,
    password: false,
  });

  const [error, setError] = useState({
    email: 'Fill Email Field',
    password: 'Fill Password Field',
  });

  useEffect(() => {
    setError(CheckValidation(data, 'login'));
  }, [data, showError, visiblilityPassword]);

  const showPassword = () => {
    if (visiblilityPassword.visible === 'text')
      setVisiblilityPassword({ visible: 'password' });
    else if (visiblilityPassword.visible === 'password')
      setVisiblilityPassword({ visible: 'text' });
  };

  const validationHandler = (name) => {
    setError(CheckValidation(data, 'login'));
    setShowError({ ...showError, [name]: true });
  };

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    validationHandler(event.target.name);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!error.email && !error.password) {
      //send information to server
      console.log(data);
      notify('Signup Successfully', true);
    } else {
      setShowError({
        password: true,
        email: true,
      });
      notify('Fill All Field', false);
    }
  };

  return (
    <>
      <main>
        <ToastContainer />
        <form onSubmit={submitForm}>
          <h2>Wellcome Back Friend</h2>
          <MyInput
            label="Email"
            showError={showError.email}
            onBlurInput={validationHandler}
            error={error.email}
            type="email"
            name="email"
            value={data.email}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="Password"
            showError={showError.password}
            onBlurInput={validationHandler}
            error={error.password}
            showPassword={showPassword}
            type={visiblilityPassword.visible}
            name="password"
            value={data.password}
            onChangeMethod={inputHandler}
          />

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
