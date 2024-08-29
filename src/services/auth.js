import BACKEND_URL from "../config/backend";

console.log("backend url:", BACKEND_URL);
export const loginCall = async (data) => {
  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
};
