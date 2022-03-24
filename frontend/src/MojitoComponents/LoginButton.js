import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{padding: '6px', backgroundColor: "Transparent", border: "none", color: "#ACC6EB"}} onClick={() => loginWithRedirect()}>Sign In</button>;
};

export default LoginButton;