import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  console.log(LoginButton);
  return (
    <button
      className="loginbutton"
      onClick={() => {
        loginWithRedirect();
        console.log(LoginButton);
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
