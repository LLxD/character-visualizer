import React, { Suspense } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Loading from "../components/Loading";

const Wrongfiles = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Row className="mt-5">
          <Col>
            <div>
              <h3>Oops, parece que teve um problema com seu arquivo :(</h3>
              <Button
                className="mt-5"
                variant="primary"
                onClick={() => {
                  props.setFiles("");
                  props.setUpload(true);
                }}
              >
                Reupload
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Suspense>
  );
};

export default Wrongfiles;
