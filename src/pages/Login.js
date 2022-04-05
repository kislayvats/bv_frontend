import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { Create_User } from "../functions/user";

const Login = () => {
  const navigate = useNavigate();
  const signin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const idTokenResult = (await result.user.getIdTokenResult()).token;
        Create_User(idTokenResult)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => console.log(err));
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>Login</div>
      <button onClick={signin}>Google log</button>
    </div>
  );
};

export default Login;
