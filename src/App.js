import React from "react";
//components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";

//router
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/game/:id" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}

//{["/game/:id", "/"]}
export default App;
