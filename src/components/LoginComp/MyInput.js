import React, { useState, useRef, useEffect } from 'react';

import style from './MyInput.module.css';

const MyInput = (props) => {
  const { type, name, value, onChangeMethod, label, onBlurInput, error, showError } =
    props;

  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  const showPrivacyAndPolicy = () => {
    setModal(!modal);
  };

  let jsx = '';
  if (type !== 'checkbox') {
    jsx = (
      <div className={style.fPart}>
        <label>{label}</label>
        <input
          onBlur={onBlurInput}
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
            onBlur={onBlurInput}
            type={type}
            name={name}
            value={value}
            onChange={onChangeMethod}
          />
        </div>
        {console.log(error)}
        {error && showError && <span className={style.error}>{error}</span>}
      </>
    );
  }
  return (
    <>
      {jsx}
      {
        <div
          ref={modalRef}
          className={style.modal}
          style={modal ? { top: '0' } : { top: '-200%' }}
        >
          <h2>Terms of Service and Privacy Policy</h2>
          <div>
            <p>
              As explained in our Privacy Policy, MyWebsite records all conversations to
              monitor for violations of our Community Guidelines and Terms of Service, or
              other illegal or illicit activity
            </p>
            <p>creator can enable recordings in two ways:</p>
            <ul>
              <li>
                <p>
                  If a room creator enables the Replay feature, the room will be recorded
                  and the recording will be stored by Clubhouse and may be made available
                  to other users on Clubhouse at the room creator’s instruction
                </p>
              </li>
              <li>
                <p>
                  If a creator enables the Clips feature, anyone in the room is able to
                  generate a video file that contains the last 30 seconds of audio
                  material from the room, and a graphic depicting the room title and
                  speakers
                </p>
              </li>
            </ul>
          </div>
          <button onClick={showPrivacyAndPolicy}>I read this content</button>
        </div>
      }
    </>
  );
};

export default MyInput;
