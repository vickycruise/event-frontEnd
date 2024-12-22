import React from "react";
import { Outlet } from "react-router-dom"; // Ensure you're using React Router correctly
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <Outlet />;
}

export default App;
