export default function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
export function truncateString(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.slice(0, n - 1); // the original check
  return (useWordBoundary ? subString.slice(0, subString.lastIndexOf(" ")) : subString) + " ...";
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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
  return {
    sx: {
      backgroundColor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
