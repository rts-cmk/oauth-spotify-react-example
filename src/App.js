import { Router } from "@reach/router";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Featured from "./pages/Featured";
import './App.css';
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
  var tokenState = useState(null);

  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        <Login default />
        <Callback path="/callback" />
        <Featured path="/featured" />
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
