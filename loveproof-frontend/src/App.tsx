import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import VisitPage from "./components/VisitPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VisitPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
