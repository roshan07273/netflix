import React, { useRef, useState } from "react";
import Header from "./Header";
import Background_Image from "../assets/bg_image.png";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    checkValidData(email, password);

    console.log(email.current.value, password.current.value);
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-100 h-100 bg-opacity-95">
        <img src={Background_Image} alt="" />
      </div>
      <div className="w-100 h-400">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-opacity-90 mb-4 absolute p-12 w-4/12 h-2/12 bg-black my-40 mx-auto right-0 left-0 text-white"
        >
          <h1
            className="font-bold text-3xl py-7 left-1 top-0"
            style={{ marginLeft: "5px", marginTop: "-60px" }}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          <div className="flex flex-col">
            {isSignInForm && (
              <input
                type="text"
                placeholder="Enter Full Name "
                className="p-2 my-2 w-full bg-gray-800"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-2 my-2 w-full bg-gray-800"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 my-2 w-full bg-gray-800"
            />
          </div>
          <p className="text-red-800">{errorMessage}</p>
          <button
            className="rounded-md  p-4 my-4 bg-red-600 hover:bg-red-700 text-white font-bold h-13 w-full  justify-center "
            onClick={handleButtonClick}
            style={{ animation: "pulse 2s infinite" }}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          <p className="py-2 ">
            {isSignInForm ? (
              <>
                Already an user?{" "}
                <span
                  className="underline underline-offset-4 text-blue-800 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign In Now
                </span>
              </>
            ) : (
              <>
                Already Registered{" "}
                <span
                  className="underline underline-offset-4 text-blue-800 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign Up Now
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
