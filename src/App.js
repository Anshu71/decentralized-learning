import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Welcome from './pages/welcome'; // Import your Welcome component
import Landing from './pages/landing'; // Import your Landing component
import AuthProvider, { useAuth } from './contexts/authContext'; // Import your AuthContext
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Webdev from "./pages/Webdev/Webdev";
import WebHtml from "./pages/Webdev/WebHtml";
import Landing from "./pages/landing";
// import Join from "./pages/join";
// import RoomPage from "./pages/room";


function App() {
  const { user } = useAuth(); // Get user from AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  useEffect(() => {
    // Check if the user is authenticated
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Landing /> : <Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/webdev" element={<Webdev />} />
          <Route path="/webhtml" element={<WebHtml />} />
          {/* <Route path="/join" element={<Join />} /> */}
          {/* <Route path="/room/:roomId" element={<RoomPage />} /> */}
      </Routes>
    </Router>
  );
}

export default function AuthApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
