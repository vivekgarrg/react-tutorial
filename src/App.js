import React from "react";
import { Navbar as Topbar, Navbar2 } from "./Components/NavBar";
import Base from "./Components/Footer";
import Body from "./Components/Body";
import Body2 from "./Components/Body2";

function App() {
  return (
    <div>
      <h1>Class Components</h1>
      <Topbar />
      <Topbar />
      <Body />
      <Body2 />
      <Base />
    </div>
  );
}

export default App;
