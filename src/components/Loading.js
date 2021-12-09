import React from "react";
import { Container, Spinner, Row } from "react-bootstrap";

const Loading = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
};

export default Loading;
