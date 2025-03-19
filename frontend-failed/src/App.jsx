import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content (Grows to push footer down) */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer at the Bottom */}
      <MyFooter />
    </div>
  );
}

export default App;
