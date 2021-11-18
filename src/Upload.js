import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Attr from "./Attr";

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

  const returnMod = (value) => {
    if (value === 1) {
      return "-5";
    } else if (value === 2 || value === 3) {
      return "-4";
    } else if (value === 4 || value === 5) {
      return "-3";
    } else if (value === 6 || value === 7) {
      return "-2";
    } else if (value === 8 || value === 9) {
      return "-1";
    } else if (value === 10 || value === 11) {
      return "+0";
    } else if (value === 12 || value === 13) {
      return "+1";
    } else if (value === 14 || value === 15) {
      return "+2";
    } else if (value === 16 || value === 17) {
      return "+3";
    } else if (value === 18 || value === 19) {
      return "+4";
    } else if (value === 20 || value === 21) {
      return "+5";
    }
  };

  return (
    <>
      <Container>
        <div className="">
          <h1>Ficha :D</h1>
          <input
            accept=".json"
            type="file"
            onChange={handleChange}
            className="mb-5"
          />
          <br />
          {(files === "" ? false : true) && (
            <div>
              <h3 className="mb-3">Nome: {files.name}</h3>
              <h3 className="mb-3">Habilidades:</h3>
              <Container>
                <Row>
                  <Col>
                    {" "}
                    <Attr
                      title={"STR"}
                      value={files.data.abilities.str.value}
                      mod={returnMod(files.data.abilities.str.value)}
                      proficient={files.data.abilities.str.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Attr
                      title={"DEX"}
                      value={files.data.abilities.dex.value}
                      mod={returnMod(files.data.abilities.dex.value)}
                      proficient={files.data.abilities.dex.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Attr
                      title={"CON"}
                      value={files.data.abilities.con.value}
                      mod={returnMod(files.data.abilities.con.value)}
                      proficient={files.data.abilities.con.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Attr
                      title={"INT"}
                      value={files.data.abilities.int.value}
                      mod={returnMod(files.data.abilities.int.value)}
                      proficient={files.data.abilities.int.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Attr
                      title={"WIS"}
                      value={files.data.abilities.wis.value}
                      mod={returnMod(files.data.abilities.wis.value)}
                      proficient={files.data.abilities.wis.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Attr
                      title={"CHA"}
                      value={files.data.abilities.cha.value}
                      mod={returnMod(files.data.abilities.cha.value)}
                      proficient={files.data.abilities.cha.proficient}
                      proficiencyBonus={files.data.attributes.prof}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
