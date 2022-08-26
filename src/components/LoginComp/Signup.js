import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Login.module.css';
import MyInput from './MyInput';
import CheckValidation from '../../CheckValidation';

const Signup = () => {
  const notify = (text, type) => (type ? toast.success(text) : toast.error(text));

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });
  const [showError, setShowError] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    isAccepted: false,
  });
  const [error, setError] = useState({
    username: 'Fill Username Field',
    confirmPassword: 'Fill ConfirmPassword Field',
    isAccepted: 'Please Accept Terms Of Use',
    email: 'Fill Email Field',
    password: 'Fill Password Field',
  });
  const [visiblilityPassword, setVisiblilityPassword] = useState({
    visible: 'password',
  });

  useEffect(() => {
    setError(CheckValidation(data, 'signup'));
  }, [data, showError, visiblilityPassword]);

  const validationHandler = (name) => {
    setError(CheckValidation(data, 'signup'));
    setShowError({ ...showError, [name]: true });
  };

  const generatePassword = () => {
    let pass =
      '~!@#$%^&*()_+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    pass = [...pass]
      .sort(() => Math.random() - 0.5)
      .join('')
      .substring(0, 15); // Shuffle Char and return 15th char
    setData({ ...data, password: pass, confirmPassword: pass });
  };

  const showPassword = () => {
    if (visiblilityPassword.visible === 'text')
      setVisiblilityPassword({ visible: 'password' });
    else if (visiblilityPassword.visible === 'password')
      setVisiblilityPassword({ visible: 'text' });
  };

  const inputHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    validationHandler(event.target.name);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (
      !error.email &&
      !error.password &&
      !error.confirmPassword &&
      !error.username &&
      !error.isAccepted
    ) {
      //send information to server
      console.log(data);
      notify('Signup Successfully', true);
    } else {
      setShowError({
        username: true,
        password: true,
        email: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify('Fill All Field', false);
    }
  };

  return (
    <>
      <main>
        <ToastContainer />
        <form onSubmit={submitForm}>
          <h2>Hi Friend</h2>
          <MyInput
            showError={showError.username}
            onBlurInput={validationHandler}
            error={error.username}
            label="User Name"
            type="text"
            name="username"
            value={data.name}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError.email}
            onBlurInput={validationHandler}
            error={error.email}
            label="Email"
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
            generatePassword={generatePassword}
            showPassword={showPassword}
            type={visiblilityPassword.visible}
            name="password"
            value={data.password}
            onChangeMethod={inputHandler}
          />
          <MyInput
            label="Confirm Password"
            showError={showError.confirmPassword}
            onBlurInput={validationHandler}
            error={error.confirmPassword}
            type={visiblilityPassword.visible}
            showPassword={showPassword}
            name="confirmPassword"
            value={data.confirmPassword}
            onChangeMethod={inputHandler}
          />
          <MyInput
            showError={showError.isAccepted}
            onBlurInput={validationHandler}
            error={error.isAccepted}
            label="I Accept Privacy & Policy (Click to read)"
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChangeMethod={inputHandler}
          />
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
