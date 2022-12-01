import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Recommendations from "./components/Recommendations";
import NotFound from "./components/NotFound";
import Start from "./components/Start";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Start/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/recommendations" element={<Recommendations/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}