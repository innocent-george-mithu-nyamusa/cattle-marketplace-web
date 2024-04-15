import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { app } from "config/firebase";

const PrivateRoute = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      console.log(isMounted, " is Mounted");
      app.auth().onAuthStateChanged(setCurrentUser);
      setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
      localStorage.setItem("authenticated", authenticated);
      localStorage.setItem("currentUser", currentUser);
    }
    return () => {
      setIsMounted(false);
    };
  }, [currentUser]);

  return currentUser !== null ? (
    <Outlet />
  ) : (
    <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />
  );
};

export default PrivateRoute;
