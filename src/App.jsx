// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Student from "./pages/student/StudentDashboard";
import Teacher from "./pages/teacher/TeacherDashboard";
import Login from "./pages/LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/login" element={<Login />} />

        {/* Routes with Layout */}
        <Route
          path="/student"
          element={
            <Layout>
              <Student />
            </Layout>
          }
        />
        <Route
          path="/teacher"
          element={
            <Layout>
              <Teacher />
            </Layout>
          }
        />

        {/* Redirect to login or home if no route matches */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
