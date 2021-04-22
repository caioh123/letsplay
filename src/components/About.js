import React from "react";
import { Container, Button } from "react-bootstrap";
import "../pages/homepage.css";

const About = () => {
  return (
    <div>
      <Container>
        <h1 className="font-italic">BLABLANOTA BLABLACAR</h1>
        <p className="mt-4">
          O <strong>Letsplay</strong> é um novo conceito de rede social que
          junta pessoas baseadas pelos seus interesses. Aqui, você não curte a
          pessoa, mas sim o evento que ela está interessada em participar!
        </p>

        <Button className="about-btn mr-4" variant="primary">
          Clique aqui para conhecer
        </Button>
        <Button variant="warning">Inscreva-se!</Button>
      </Container>
    </div>
  );
};

export default About;
