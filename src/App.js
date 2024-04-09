import React from "react";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
