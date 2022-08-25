const CheckValidation = (data, type) => {
  let error = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  };

  if (!data.email) {
    error = { ...error, email: 'Fill Email Field' };
  } else if (!data.email.includes('@') || !data.email.includes('.com')) {
    error = { ...error, email: 'It seems email is not valid' };
  }

  if (!data.password) {
    error = { ...error, password: 'Fill Password Field' };
  }

  if (type === 'signup') {
    if (!data.confirmPassword) {
      error = { ...error, confirmPassword: 'Fill ConfirmPassword Field' };
    } else if (data.confirmPassword !== data.password) {
      error = { ...error, confirmPassword: `Password & ConfirmPassword dosn't match` };
    }

    if (!data.username) {
      error = { ...error, username: 'Fill Username field' };
    }

    if (!data.isAccepted) {
      error = { ...error, isAccepted: 'Please Check The Terms Of Use And Accept It' };
    }
  }

  return error;
};

export default CheckValidation;
