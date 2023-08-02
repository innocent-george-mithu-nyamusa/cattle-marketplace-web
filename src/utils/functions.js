export default function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const customErrorMessage = (errorCode) => {
  let message = "";

  switch (errorCode.toString()) {
    case "EMAIL_EXISTS":
      message = "Your account is already registered";
      break;
    case "INVALID_EMAIL":
      message = "You have entered an invalid email";
      break;
    case "INVALID_PASSWORD":
      message = "You have entered an invalid password";
      break;
    case "TIMEOUT":
      message = "Registration has timed out";
      break;
    case "WEAK_PASSWORD":
      message = "You have entered a weak password";
      break;
    default:
      message = errorCode;
  }

  return message;
};
