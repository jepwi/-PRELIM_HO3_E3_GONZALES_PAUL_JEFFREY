import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PropsPage from "./components/PropsPage";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar"; // Import Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage message="Hello World!" />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
