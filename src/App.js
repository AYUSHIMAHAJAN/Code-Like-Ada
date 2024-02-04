// class based component
import React, { useState } from "react";
// import Scrollbar from 'smooth-scrollbar';
import News from "./News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Speech from "./pages/Speech/Speech";
import VideoDescription from "./pages/VideoDescription";


const App = () => {
  let [progress, setProgress] = useState(0);

  const [mode, setMode] = useState("light");
  const setProgressUtil = (progress) => {
    setProgress(progress);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#223756";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      {/* Scrollbar.init(document.querySelector('#my-scrollbar')); */}
      <LoadingBar color="#f11946" progress={progress} />
       
      <Routes>
        {/* <Route exact path="/" element={<Login/>} /> */}
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/"  element={<Speech/>} />
        <Route exact path="/Recommendations"  element={<News/>} />
        <Route exact path="/Videos" element={<VideoDescription/>}/>

       
        
        {/* <Route exact path="/world" element={<News key="world"setProgress={setProgressUtil} country="in" mode={mode} toggleMode={toggleMode} category="world" heading="World"  />} />
       <Route exact path="/politics" element={<News key="politics"setProgress={setProgressUtil} country="in" mode={mode} toggleMode={toggleMode} category="politics" heading="Politics"  />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
