import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import style from './MyInput.module.css';

const MyInput = (props) => {
  const location = useLocation();

  const {
    type,
    name,
    value,
    onChangeMethod,
    label,
    onBlurInput,
    error,
    showError,
    generatePassword,
    showPassword,
  } = props;

  const [modal, setModal] = useState(false);

  const showPrivacyAndPolicy = () => {
    setModal(!modal);
  };

  let jsx = '';
  if (type !== 'checkbox') {
    jsx = (
      <div className={style.fPart}>
        <div className={style.titleField}>
          <label>{label}</label>
          {name === 'password' && (
            <div>
              {location.pathname === '/signup' && (
                <i
                  title="generate strong password"
                  className={'fa fa-key'}
                  onClick={generatePassword}
                />
              )}
              <i
                title="show/hide password"
                className={'fa fa-eye'}
                onClick={showPassword}
              />
            </div>
          )}
        </div>
        <input
          onBlur={() => onBlurInput(name)}
          onChange={onChangeMethod}
          type={type}
          name={name}
          value={value}
        />
        {error && showError && <span className={style.error}>{error}</span>}
      </div>
    );
  } else {
    jsx = (
      <>
        <div className={style.fPartHo}>
          <label onClick={showPrivacyAndPolicy} className={style.privacyPolicy}>
            {label}
          </label>
          <input
            onBlur={() => onBlurInput(name)}
            type={type}
            name={name}
            value={value}
            onChange={onChangeMethod}
          />
        </div>
        {error && showError && <span className={style.error}>{error}</span>}
      </>
    );
  }
  return (
    <div className={style.mInputContainer}>
      {jsx}
      {modal && (
        <div className={style.modal}>
          <h2>Terms of Service and Privacy Policy</h2>
          <div>
            <p>
              As explained in our Privacy Policy, MyWebsite records all conversations to
              monitor for violations of our Community Guidelines and Terms of Service
            </p>
            <p>creator can enable recordings in two ways:</p>
            <ul>
              <li>
                <p>
                  If a room creator enables the Replay feature, the room will be recorded
                  and the recording will be stored by Clubhouse
                </p>
              </li>
              <li>
                <p>
                  If a creator enables the Clips feature, anyone in the room is able to
                  generate a video file that contains the last 30 seconds of audio
                  material from the room
                </p>
              </li>
            </ul>
          </div>
          <button onClick={showPrivacyAndPolicy}>Ok</button>
        </div>
      )}
    </div>
  );
};

export default MyInput;
