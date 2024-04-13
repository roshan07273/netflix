import React from "react";
import { useEffect } from "react";
import Logo from "../assets/Vector__3_.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribed when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    // toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" bg-transparent w-screen justify-between flex absolute px-10 py-6 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={Logo}
        alt="logo"
        style={{
          margin: "10px",
          height: "40px",
          width: "auto",
          marginLeft: "-10px",
        }}
      />
      {user && (
        <div className="cursor-pointer flex justify-between items-center space-x-4 ">
          <button
            className="mx-4 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            onClick={handleGptSearch}
          >
            {showgptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="h-9 w-9 mr-13 rounded-lg  px-4 py-2 "
            src={user?.photoURL}
            alt="user_icon"
            style={{ marginLeft: "-20px" }}
          />
          <div className="flex items-center justify-end">
            {showgptSearch && (
              <select
                className="mr-2 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-800"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((languages) => (
                  <option
                    key={languages.identifier}
                    value={languages.identifier}
                  >
                    {languages.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="mr-2 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              type="button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
