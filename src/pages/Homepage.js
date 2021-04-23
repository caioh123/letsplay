import React from "react";
import Navbar from "../components/NavbarMenu";
import MainContainer from "../components/MainContainer";
import CarrouselPage from "../components/CarrouselPage";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="img main-container">
        <MainContainer />
        <div className="carousel-page">
          <CarrouselPage />
        </div>
      </div>
    </>
  );
};

export default Homepage;
