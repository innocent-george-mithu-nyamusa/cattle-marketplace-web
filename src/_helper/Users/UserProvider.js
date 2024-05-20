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
      return createUserAccountResult;
    }

    createUserAccountResult = await createUserAccount(signUpDetails);

    return createUserAccountResult;
  };

  return <Context.Provider value={{ loginUser, signUpUser }}>{props.children}</Context.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
