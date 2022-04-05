import { signOut } from "@firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth);
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
  return (
    <div>
      {" "}
      <div>HOME</div> <div className="App">Hello world</div>
      {/* <button onClick={logout}> LOGOUT </button> */}
      {user ? (
        <button onClick={logout}> LOGOUT </button>
      ) : (
        <Link to="/login">
          {" "}
          <button>Login</button>{" "}
        </Link>
      )}
      <h1> {user && user.username} </h1>
      {/* {JSON.stringify(userValue)} */}
      <br />
      {/* <button onClick={signin}>Google log</button>
      <button onClick={callUser}> Call Backend</button>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Title"
          name="title"
          value={postData.title}
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Description"
          name="description"
          value={postData.description}
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Image URL"
          name="image"
          value={postData.image}
        />
        <br />
        <button onClick={handleSubmitNewPost}> CRETAE NEW POST </button>
        <button onClick={logout}> LOGOUT </button>
      </form> */}
    </div>
  );
};

export default Home;
