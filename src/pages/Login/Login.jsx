import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import banner_login from "../../assets/banner_login.png";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div>
        <button onClick={() => loginWithRedirect()}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
