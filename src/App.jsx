// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginScreen from "./pages/LoginScreen";
// import StudentDashboard from "./pages/StudentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import { AuthProvider } from "./store/AuthContext";
// import Layout from "./pages/Layout";

// const App = () => {
//   return (
//     <BrowserRouter basename="/">
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<LoginScreen />} />
//           <Route path="/teacher" element={<TeacherDashboard />} />
//           <Route path="/student" element={<StudentDashboard />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginScreen from "./pages/LoginScreen";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginScreen />} />{" "}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
