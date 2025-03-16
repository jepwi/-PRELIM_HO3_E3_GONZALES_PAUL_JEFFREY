import React from "react";
import "../styles/Home.css";

const Home = () => (
  <div className="home-container">
    <div className="home-box">
      <h2 className="home-title">WELCOME!</h2>
      <p className="home-text">HELLO PHILIPPINES!</p>
      <a href="/todo" className="home-btn">Get Started</a>
    </div>
  </div>
);

export default Home;
