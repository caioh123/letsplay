import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgteste from "../images/party1.png";

const CarrouselPage = () => {
  return (
    <div>
      <div className="container-slider container-fluid">
        <Carousel>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={imgteste}
            />

            <Carousel.Caption>
              <h3 style={{ color: "white" }}>
                Já deixou de ir naquele show da {"\n"}
                sua banda favorita porque não {"\n"}
                tinha uma companhia?
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "300px" }}>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={imgteste}
            />

            <Carousel.Caption>
              <h3>Second Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "300px" }}>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={imgteste}
            />

            <Carousel.Caption>
              <h3>Third Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarrouselPage;
