import { auth } from "config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";

import { db } from "../config/firebase";

export const UserCollectionService = collection(db, "users");

const customErrorMessages = {
  "auth/wrong-password": "The password is incorrect.",
  "auth/user-not-found": "There is no user with that email address.",
  "auth/email-already-in-use": "The email address is already in use.",
  // ... add more error codes and messages
};

export const signInUser = async (form) => {
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

export const SignUpUserAccount = async (form) => {
  try {
    return await createUserWithEmailAndPassword(auth, form.email, form.password)
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
  } catch (error) {
    console.error("Error signing up:", error);
    return { error: "Unexpected error", code: "unknown", success: false };
  }
};

export const createUserAccount = async (form) => {
  try {
    const reference = doc(db, "users", form.email);

    return await setDoc(reference, {
      firstname: form.firstname,
      lastname: form.lastname,
      phone: form.phone,
      email: form.email,
      farmer: form.farmer,
      accessLevel: "user",
    })
      .then((userCredential) => {
        console.log(userCredential);
        // const email = user.email;
        return { success: true, email: form.email };
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
  } catch (error) {
    console.error("Error adding details to firestore:", error);
    return { error: "Unexpected error", code: "unknown", success: false };
  }
};
