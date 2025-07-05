import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {} from "module";
import Weather from "./components/Weather";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LoginForm from "./components/LoginForm";
import ProfileList from "./components/ProfileList";
import Navbar from "./components/Navbar";
import UserListPage from "./pages/UserListWithLoader";
function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/weather" element={<Weather />} />
            <Route path="/theme" element={<ThemeSwitcher/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/profile" element={<ProfileList/>} />
            <Route path="/users" element={<UserListPage/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
