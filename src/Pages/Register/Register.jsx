import Lottie from "lottie-react";
import registerLottieData from "../../assets/register.json";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../Common/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    // password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Provide a Valid Password",
      });
    }

    // CreateNew User
    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Good job!",
          text: "User Registration Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: ("Please solved the Error ", error.message),
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="w-80" animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className=" ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
