import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Skills = (props) => {
  const keys = Object.keys(props.skills);
  const skillsArray = [];
  keys.forEach((key, index) => {
    let ability = props.skills[`${key}`].ability;
    let abilityPosition;
    if (ability === "str") {
      abilityPosition = 0;
    } else if (ability === "dex") {
      abilityPosition = 1;
    } else if (ability === "con") {
      abilityPosition = 2;
    } else if (ability === "int") {
      abilityPosition = 3;
    } else if (ability === "wis") {
      abilityPosition = 4;
    } else if (ability === "cha") {
      abilityPosition = 5;
    }
    let proficient = props.skills[`${key}`].value;
    skillsArray.push(
      <>
        <Col className="d-flex" xl={1}>
          <h4>{key}</h4>
          <h6>({ability})</h6>
        </Col>
        <Col xl={1}>
          <h5>
            {proficient
              ? props.modArray[abilityPosition] + "+" + props.proficiencyBonus
              : props.modArray[abilityPosition]}
          </h5>
        </Col>
      </>
    );
  });
  return (
    <div>
      <Container className="d-flex flex-wrap row mt-5 justify-content-center">
        <Row>
          {skillsArray.map((index) => {
            return index;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
