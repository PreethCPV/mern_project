import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:4000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="home">
      <nav className="navbar">
        <h3>Podcast Streaming</h3>
        <div className="nav-links">
          <Link to="/home" className="nav-button">
            Home
          </Link>
          <Link to="/categories" className="nav-button">
            Categories
          </Link>

          <Link to="/library" className="nav-button">
            Library
          </Link>
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our podcast streaming application.</p>
      </div>
    </div>
  );
};

export default Home;
