import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center py-3 mt-3 bottom-0">
      <p>
        &copy; 2023 John Doe. All rights reserved. | Built with React and Bootstrap
      </p>
      <div>
        <a href="https://www.facebook.com/" className="text-light" />
        <a href="https://www.instagram.com/" className="text-light" />
        <a href="https://www.twitter.com/" className="text-light" />
        <a href="https://www.linkedin.com/" className="text-light" />
        <a href="https://www.github.com/" className="text-light" />
      </div>
    </Container>
  );
}

