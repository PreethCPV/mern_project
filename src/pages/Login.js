import React, { useState, useEffect } from "react";
import "../styles/SignUp.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.defaults.withCredentials = true;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    Axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        setLoading(false);
        if (response.data.status) {
          navigate("/home");
        } else {
          setError(response.data.message || "Login failed");
        }
        //console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data?.message || "An error occurred");
        console.error("Login error:", err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        <Link to="/forgotpassword">Forgot Password?</Link>
        <p>
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
