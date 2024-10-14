import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  // State to toggle between Login and Signup
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submit
  const onSubmit = (data) => {
    if (isLogin) {
      toast.success(`Logging in with: ${JSON.stringify(data)}`);
    } else {
      toast.success(`Signing up with: ${JSON.stringify(data)}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
        <Link to="/">
          <div className="w-[50px] h-[50px] rounded-full bg-green-500 text-center absolute top-10 left-10">
            <i className="fa-solid fa-arrow-left text-[22px] mt-3 cursor-pointer"></i>
          </div>
        </Link>
        {/* Container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* Form */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <p className="text-xs mt-4 text-[#002D74]">
              {isLogin
                ? "If you are already a member, easily log in"
                : "Create your account to get started"}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Email Input */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              {/* Password Input */}
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                    },
                  })}
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 16 16"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

              {/* Submit Button */}
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Divider with "OR" */}
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            {/* Google Login Button */}
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.273,5.492l6.19,5.238C43.862,21.35,44,22.659,44,24C44,27.007,42.97,33.09,38.751,36.992l-6.19-5.238C35.147,33.091,38.645,36,42,36c6.348,0,12-5.373,12-12C54,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>

            {/* Switch between Login and Signup */}
            <div className="mt-6 text-center text-[#002D74]">
              <span>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  className="font-bold ml-2"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block md:w-1/2">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Auth Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
