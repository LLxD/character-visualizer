import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Wrongfiles from "../components/Wrongfiles";
import Heroinfo from "./Heroinfo";

export function Upload({ children }) {
  const [files, setFiles] = useState("");
  const [upload, setUpload] = useState(true);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFiles(JSON.parse(e.target.result));
      setUpload(false);
    };
  };

  return (
    <>
      <Container>
        <div>
          {upload && (
            <>
              <h1 className="mt-5">Ficha :D</h1>
              <input
                accept=".json"
                type="file"
                onChange={handleChange}
                className="mb-5"
              />
              <br />
            </>
          )}
          {(files === "" ? false : true) &&
            (files.name !== undefined ? (
              <Heroinfo setUpload={setUpload} upload={upload} file={files} />
            ) : (
              <Wrongfiles setFiles={setFiles} setUpload={setUpload} />
            ))}
        </div>
      </Container>
    </>
  );
}
