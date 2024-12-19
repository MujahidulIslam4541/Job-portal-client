import axios from "axios";
import { useEffect } from "react";
import UseContext from "./UseContex";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-two-peach.vercel.app",
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

        if (error.status === 403 || error.status === 401) {
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
  }, [navigate,signOutUser]);

  return axiosInstance;
};

export default UseAxiosSecure;
