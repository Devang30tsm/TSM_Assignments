import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HobbyInfo from "./pages/HobbyInfo";
import ProfileList from "./pages/ProfileList";
import CounterApp from "./pages/Counter";
import LiveInputForm from "./pages/LiveInput";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobby" element={<HobbyInfo />} />
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/input" element={<LiveInputForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
