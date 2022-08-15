import React from "react";
import Navbar from "./Components/NavBar";
import Footer from './Components/Footer';
import Body from "./Components/Body";
import ConditionalRender from "./Components/ConditionalRender";

function App() {
  return (
    <>
      {/* <Navbar />
      <Body />
      <Footer /> */}
      <ConditionalRender isLoggedIn={false} />
    </>
  );
}

export default App;
