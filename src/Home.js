import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Whatido from "./components/Whatido";
import PortfolioSummary from "./components/portfolioSummary";

const Home = () => {
  return (
    <div>
      <Landing />
      <Navbar />
      <About />
      <Whatido />
      <PortfolioSummary />
    </div>
  );
};

export default Home;
