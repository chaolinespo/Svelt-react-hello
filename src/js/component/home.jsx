import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <div className="Container">
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
