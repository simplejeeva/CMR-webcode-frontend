import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
//
import React from "react";

//
import { Adduser } from "./Adduser";
import { Appbar } from "./Appbar";
import { Contact } from "./Contact";
import { Dashboard } from "./Dashboard";
import { Forgotpassword } from "./Forgotpassword";
import { Leads } from "./Leads";
import { Login } from "./Login";
import { Register } from "./Register";
import { Service } from "./Service";
import { Updatepassword } from "./Updatepassword";
import { Users } from "./Users";
import { Verification } from "./Verification";
import { Viewuser } from "./Viewuser";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/updatepassword" element={<Updatepassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <ProtectedRoute>
              <Viewuser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adduser"
          element={
            <ProtectedRoute>
              <Adduser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? <div>{children}</div> : <Navigate replace to="/" />;
  }
}

export default App;
