import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <a style={{padding: '10px'}} onClick={() => loginWithRedirect()}>Sign In</a>;
};

export default LoginButton;