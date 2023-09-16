import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Webdev from "./pages/Webdev/Webdev";
import WebHtml from "./pages/Webdev/WebHtml";
import Landing from "./pages/landing";
import Welcome from "./pages/Welcome";
import Join from "./pages/join";
import RoomPage from "./pages/room";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/webhtml" element={<WebHtml />} />
          <Route path="/join" element={<Join />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;