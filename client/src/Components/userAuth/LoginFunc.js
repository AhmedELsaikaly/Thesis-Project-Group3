import axios from "axios";
export const login = (user) => {
  return axios
    .post("/api/signin", {
      email: user.email,
      password: user.password,
    })
    .then((result) => {
      console.log("Found User", result);
      localStorage.setItem("userToken", result.data);
      return result.data;
    })
    .catch((err) => {
      alert("your email or password isn't correct");

      console.log("Error in Signing in ", err);
    });
};
