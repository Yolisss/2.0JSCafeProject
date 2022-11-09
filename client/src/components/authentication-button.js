import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

//if the user is logged in, display log out button
//if not, dislay log in button
const saveUser = (user) => {
  return fetch("http://localhost:2028/api/me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      saveUser(user);
    }
  }, [isAuthenticated, user]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
