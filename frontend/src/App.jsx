import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import useAuthStore from "./store/authStore";

const App = () => {
  const { isAutehnticated } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAutehnticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAutehnticated ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={isAutehnticated ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;