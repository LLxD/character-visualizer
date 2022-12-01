import React from "react";
import Attr from "../components/Attr";
import Skills from "../components/Skills";
import { Container, Row, Col } from "react-bootstrap";

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

const Hero = (props) => {
  const files = props.file;
  return (
    <div>
      <h3 className="mb-3 mt-2">Nome: {files.name}</h3>
      <h3 className="mb-3">Habilidades:</h3>
      <Container>
        <Row>
          <Col>
            {" "}
            <Attr
              title={"STR"}
              value={files.system.abilities.str.value}
              mod={returnMod(files.system.abilities.str.value)}
              proficient={files.system.abilities.str.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
          <Col>
            {" "}
            <Attr
              title={"DEX"}
              value={files.system.abilities.dex.value}
              mod={returnMod(files.system.abilities.dex.value)}
              proficient={files.system.abilities.dex.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
          <Col>
            {" "}
            <Attr
              title={"CON"}
              value={files.system.abilities.con.value}
              mod={returnMod(files.system.abilities.con.value)}
              proficient={files.system.abilities.con.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
          <Col>
            {" "}
            <Attr
              title={"INT"}
              value={files.system.abilities.int.value}
              mod={returnMod(files.system.abilities.int.value)}
              proficient={files.system.abilities.int.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
          <Col>
            {" "}
            <Attr
              title={"WIS"}
              value={files.system.abilities.wis.value}
              mod={returnMod(files.system.abilities.wis.value)}
              proficient={files.system.abilities.wis.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
          <Col>
            {" "}
            <Attr
              title={"CHA"}
              value={files.system.abilities.cha.value}
              mod={returnMod(files.system.abilities.cha.value)}
              proficient={files.system.abilities.cha.proficient}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Skills
              modArray={[
                returnMod(files.system.abilities.str.value),
                returnMod(files.system.abilities.dex.value),
                returnMod(files.system.abilities.con.value),
                returnMod(files.system.abilities.int.value),
                returnMod(files.system.abilities.wis.value),
                returnMod(files.system.abilities.cha.value),
              ]}
              skills={files.system.skills}
              proficiencyBonus={files.system.attributes.prof}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
