import React, { useState } from "react";
import { loginCall } from "../services/auth";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginCall(userData);
      console.log("response", response);

      if (response.success) {
        setTimeout(() => {
          if (response.role === "student") {
            navigate("/student");
          } else if (response.role === "teacher") {
            navigate("/teacher");
          }
        }, 2000);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.log("login err:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign in to your account</h2>
          <p className="mx-auto">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-control">
                <div className="flex justify-evenly">
                  <label className="cursor-pointer label">
                    <input
                      type="radio"
                      name="role"
                      className="radio checked:bg-blue-600"
                      value="student"
                      checked={userData.role === "student"}
                      onChange={(e) => {
                        setUserData({ ...userData, role: "student" });
                      }}
                    />
                    <span className="ml-2">Student</span>
                  </label>
                  <label className="cursor-pointer label">
                    <input
                      type="radio"
                      name="role"
                      className="radio checked:bg-blue-600"
                      value="teacher"
                      checked={userData.role === "teacher"}
                      onChange={(e) => {
                        setUserData({ ...userData, role: "teacher" });
                      }}
                    />
                    <span className="ml-2">Teacher</span>
                  </label>
                </div>
              </div>

              {/* Email address */}
              <div className="my-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                  />
                </label>
              </div>

              {/* Password */}
              <div className="my-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    value={userData.password}
                  />
                </label>
              </div>
            </div>
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-primary btn-wide">Proceed</button>
            </div>
          </form>
          {errorMessage !== "" ? (
            <div
              role="alert"
              className="alert alert-error mt-4 p-2 bg-red-50 border-red-600 text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current hidden sm:block"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="">{errorMessage}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
