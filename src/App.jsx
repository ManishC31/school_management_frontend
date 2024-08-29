import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import { AuthProvider } from "./store/AuthContext";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
