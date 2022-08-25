import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

const sitekey = 'm';

const ReCaptcha = () => {
  const captchaHandler = (value) => {
    console.log(value);
  };
  return (
    <div>
      <ReCAPTCHA
        style={{
          width: 'fit-content',
          margin: '20px auto',
        }}
        sitekey={sitekey}
        onChange={captchaHandler}
      />
    </div>
  );
};

export default ReCaptcha;
