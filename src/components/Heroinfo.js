import React, { Suspense } from "react";
import Loading from "../components/Loading";
import { Button } from "react-bootstrap";

const Hero = React.lazy(() => import("./Hero"));

const Heroinfo = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero file={props.file} />
      <div className="d-flex justify-content-center">
        <Button
          className="mt-5 mb-5"
          variant="primary"
          onClick={() => {
            props.setUpload(!props.upload);
          }}
        >
          Esconder/Abrir Upload
        </Button>
      </div>
    </Suspense>
  );
};

export default Heroinfo;
