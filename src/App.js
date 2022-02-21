import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Pages/Context/AuthContext';
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NavBar from './Components/NavBar';
import SignIn from "./Pages/SignIn";
import Compiler from "./Pages/Compiler"
import AddQuestions from './Components/Profile/AddQuestions'

function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="profile/add_question" element={<AddQuestions />} />
        <Route path="signup/" element={<SignUp />} />
        <Route path="signin/" element={<SignIn />} />
        <Route path="compiler/" element={<Compiler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
