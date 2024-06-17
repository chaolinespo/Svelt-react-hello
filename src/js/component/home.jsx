import React from "react";
import {Navbar} from "./navbar";
import {Jumbotron} from "./jumbotron";
import {Card} from "./card";
import {Footer} from "./footer";

//create your first component
const Home = () => {
  return (
    <div className="Container">
      <Navbar />
      <div className="container mt-2 mb-5">
      <Jumbotron />
      <div className="row mt-2">
      <Card />
      <Card />
      <Card />
      <Card />
        </div>      
      
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
