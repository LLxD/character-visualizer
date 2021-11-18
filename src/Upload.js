import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
export function Upload({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setFiles(JSON.parse(e.target.result));
    };
  };

  return (
    <>
      <Container>
        <div className="">
          <h1>Ficha :D</h1>

          <input accept=".json" type="file" onChange={handleChange} />
          <br />

          {(files === "" ? false : true) && (
            <div>
              <h3>Nome: {files.name}</h3>
              <h3>Habilidades:</h3>
              <div className="d-flex ">
                <div className="col">
                  <h4>STR</h4>
                  <h5>{files.data.abilities.str.value}</h5>
                </div>
                <div className="col">
                  <h4>DEX</h4>
                  <h5>{files.data.abilities.dex.value}</h5>
                </div>
                <div className="col">
                  <h4>CON</h4>
                  <h5>{files.data.abilities.con.value}</h5>
                </div>
                <div className="col">
                  <h4>INT</h4>
                  <h5>{files.data.abilities.int.value}</h5>
                </div>
                <div className="col">
                  <h4>WIS</h4>
                  <h5>{files.data.abilities.wis.value}</h5>
                </div>
                <div className="col">
                  <h4>CHA</h4>
                  <h5>{files.data.abilities.cha.value}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
