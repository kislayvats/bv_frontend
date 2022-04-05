import axios from "axios";

export const firstCallToBackend = async () => {
  return await axios.get("http://localhost:8000/greetings");
};

export const callUser = async () => {
  return await axios.get(`http://localhost:5050/api/user/Jyoti`);
};
