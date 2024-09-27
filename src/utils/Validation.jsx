import validator from 'is_js';
import {showMessage} from 'react-native-flash-message';

const checkEmpty = (val, key) => {
  return validator.empty(val.trim()) ? `Please enter ${key}` : '';
};

const checkMinLength = (val, minLength, key) => {
  return val.trim().length < minLength ? `Please enter valid ${key}` : '';
};

export default function validateFields(data) {
  const {fullName, userName, email, password, otp} = data;

  const fields = [
    {value: userName, key: 'User name', minLength: 3},
    {value: fullName, key: 'Full name', minLength: 3},
    {
      value: email,
      key: 'Email',
      validate: () =>
        !validator.email(email) ? 'Please enter valid email' : '',
    },
    {value: password, key: 'Password', minLength: 6},
    {value: otp, key: 'Otp', minLength: 4},
  ];

  for (const {value, key, minLength, validate} of fields) {
    const emptyValidationText = checkEmpty(value, key);
    if (emptyValidationText) {
      return emptyValidationText;
    }

    if (validate) {
      const validationError = validate();
      if (validationError) {
        return validationError;
      }
    }

    if (minLength) {
      const minLengthValidation = checkMinLength(value, minLength, key);
      if (minLengthValidation) {
        return minLengthValidation;
      }
    }
  }

  return ''; // Return an empty string if all validations pass
}

export const showError = message => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
    duration: 2500,
  });
};

export const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
    duration: 2500,
  });
};
