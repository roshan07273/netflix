import React, { useRef, useState } from "react";
import Header from "./Header";
import Background_Image from "../assets/bg_image.png";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignInForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { PHOTO_URL },
          })
            .then(() => {
              const { uid, email, displayname, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayname: displayname,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Already you are an user!");
        });
    } else {
      //Sign-In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          // eslint-disable-next-line no-unused-vars
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": User Not Found");
        });
    }
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
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col">
            {!isSignInForm && (
              <input
                ref={name}
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
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-2 ">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  className="underline underline-offset-4 text-blue-800 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign Up Now
                </span>
              </>
            ) : (
              <>
                Already Registered?{" "}
                <span
                  className="underline underline-offset-4 text-blue-800 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign In Now
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
