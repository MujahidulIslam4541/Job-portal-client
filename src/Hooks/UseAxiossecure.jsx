import axios from "axios";
import { useEffect } from "react";
import UseContext from "./UseContex";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { signOutUser } = UseContext();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in exteroceptor", error);

        if (error.status === 403 || error.status === 401) {
          console.log("logout to user");
          signOutUser()
            .then((data) => {
              console.log(data);
              navigate("/signIn");
            })
            .catch((error) => console.log("logoutUser", error));
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default UseAxiosSecure;
