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

export const customAnimalData = {
  cattle: {
    stages: ["calf", "heifer", "bull", "cow"],
  },
  pigs: {
    stages: ["piglet", "gilt", "boar", "sow"],
  },
  goats: {
    stages: ["kid", "buckling", "buck", "doeling", "doe"],
  },
  sheep: {
    stages: ["ewe lamb", "ewe", "ram"],
  },
};
