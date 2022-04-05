import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { callUser } from "./functions/learning";
import { Create_User, getSingleUser } from "./functions/user";
import { CreateNewPost } from "./functions/post";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  const [value, setValue] = useState("");
  const [userValue, setUserValue] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    image: "",
    description: "",
    views: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        getSingleUser(idTokenResult.token)
          .then((res) => {
            console.log(res.data);
            setUserValue(res.data);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                username: res.data.username,
                email: res.data.email,
                userId: res.data._id,
                token: idTokenResult,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return unsubscribe;
  }, [dispatch]);

  const handleSubmitNewPost = async (e) => {
    e.preventDefault();
    console.log(postData);
    CreateNewPost(postData)
      .then((res) => console.log("POST_CREATE_RESPONSE_FROM_BACKEND", res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
