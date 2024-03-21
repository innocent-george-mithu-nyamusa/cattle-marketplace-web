import { auth } from "config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signInUser = async (form) => {
  const customErrorMessages = {
    "auth/wrong-password": "The password is incorrect.",
    "auth/user-not-found": "There is no user with that email address.",
    "auth/email-already-in-use": "The email address is already in use.",
    // ... add more error codes and messages
  };

  try {
    return await signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        const email = user.email;
        return { success: true, email };
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        // Check if you have a custom message
        if (customErrorMessages[errorCode]) {
          errorMessage = customErrorMessages[errorCode];
        }

        return { error: errorMessage, code: errorCode, success: false };
      });
  } catch (er) {
    console.error("Error signing in:", er);
    return { error: "Unexpected error", code: "unknown", success: false };
  }
};
