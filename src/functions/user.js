import { async } from "@firebase/util";
import axios from "axios";

export const Create_User = async (authtoken) => {
  return await axios.post(
    "http://localhost:5050/api/create/new/user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getSingleUser = async (authtoken) => {
  return await axios.get(`http://localhost:5050/api/get/user`, {
    headers: { authtoken },
  });
};
