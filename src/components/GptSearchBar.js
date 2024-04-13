import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language) || "en"; // Default language key is "en" if undefined
  return (
    <div className="bg-transparent fixed bottom-0 -left-10 w-full p-4">
      <form className="max-w-screen-lg mx-auto flex">
        <input
          type="text"
          className="text-white border-2 border-white flex-grow bg-transparent rounded-l-md p-4 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder={language[languageKey]?.gptSearchPlaceholder} // Removed optional chaining operator as default language key is ensured
        />
        <button
          className="ml-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-r-md"
          style={{ color: "white" }}
        >
          {" "}
          {/* Added inline style to ensure button text color is white */}
          {language[languageKey]?.search}{" "}
          {/* Removed optional chaining operator as default language key is ensured */}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
