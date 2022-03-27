import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const firstCallToBackend = async () => {
    await axios
      .get("http://localhost:8000/greetings")
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  };

  const callUser = async () => {
    await axios
      .get(`http://localhost:5050/api/user/Jyoti`)
      .then((res) => {
        console.log("BACKEND_RESPONSE==>>", res.data);
        setValue(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="App">Hello world</div>
      {value}
      <button onClick={callUser}> Call Backend</button>
    </>
  );
}

export default App;
