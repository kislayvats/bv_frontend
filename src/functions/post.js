import axios from "axios";

export const CreateNewPost = async (postData) => {
  console.log(postData);
  return await axios
    .post("http://localhost:5050/api/post/create", postData, {})
    .then((res) => console.log("POST_CREATE_RESPONSE_FROM_BACKEND", res.data))
    .catch((err) => console.log(err));
};
