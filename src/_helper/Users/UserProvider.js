import React from "react";
import Context from "./index";
import { signInUser } from "services/userAuthService";
import PropTypes from "prop-types";

const UserProvider = (props) => {
  const loginUser = async (loginDetails) => {
    const result = await signInUser(loginDetails);
    return result;
  };

  return <Context.Provider value={{ loginUser }}>{props.children}</Context.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element], PropTypes.element),
};

export default UserProvider;
