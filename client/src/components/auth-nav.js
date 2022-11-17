import React from "react";
import AuthenticationButton from "./authentication-button";

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    {/* //add my list of hot coffee/ice etc */}
    <div className="authButton">
      <AuthenticationButton />
    </div>
  </div>
);

export default AuthNav;
