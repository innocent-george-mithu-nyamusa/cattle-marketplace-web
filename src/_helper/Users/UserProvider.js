import React from "react";
import Context from "./index";
import { signInUser, SignUpUserAccount, createUserAccount } from "services/userAuthService";
import PropTypes from "prop-types";

const UserProvider = (props) => {
  const loginUser = async (loginDetails) => {
    const result = await signInUser(loginDetails);
    return result;
  };

  const signUpUser = async (signUpDetails) => {
    let createUserAccountResult;
    createUserAccountResult = await SignUpUserAccount(signUpDetails);

    if (createUserAccountResult.success == false) {
      return createUserAccount;
    }

    createUserAccountResult = await createUserAccount(signUpDetails);
    return createUserAccount;
  };

  return <Context.Provider value={{ loginUser, signUpUser }}>{props.children}</Context.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element], PropTypes.element),
};

export default UserProvider;
