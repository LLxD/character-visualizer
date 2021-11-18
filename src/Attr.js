import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { DiceRoll } from "rpg-dice-roller";

const Attr = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowCheck(false);
  };

  const handleShow = () => setShow(true);

  const [showCheck, setShowCheck] = useState(false);
  const [showSaving, setShowSaving] = useState(false);
  const [rolled, setRolled] = useState("0");

  const rollCheck = (mod, check) => {
    let roll;
    if (check) {
      roll = new DiceRoll("d20" + mod);
      setShowCheck(true);
      setShowSaving(false);
      setRolled(roll.output);
    } else {
      roll = new DiceRoll(
        "d20" + mod + (props.proficient ? `+${props.proficiencyBonus}` : "+0")
      );
      setShowCheck(false);
      setShowSaving(true);
      setRolled(roll.output);
    }
  };

  return (
    <div className="text-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>VAMO ROLAR {props.title} CARAI!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showCheck && !showSaving && (
            <div>
              <h4>Quer fazer um Check ou Saving Throw?</h4>
              <div className="d-flex justify-content-center  mt-2">
                <Button
                  className="mx-2"
                  variant="primary"
                  onClick={() => {
                    rollCheck(props.mod, true);
                  }}
                >
                  Check
                </Button>
                <Button
                  className="mx-2"
                  variant="primary"
                  onClick={() => {
                    rollCheck(props.mod, false);
                  }}
                >
                  Saving Throw
                </Button>
              </div>
            </div>
          )}
          {showCheck && (
            <>
              <Row>
                <Col>
                  <h4>RESULTADO: {rolled}</h4>
                  <div className="d-flex justify-content-center  mt-2">
                    <Button
                      variant="primary"
                      onClick={() => {
                        rollCheck(props.mod, true);
                      }}
                    >
                      Rerolar
                    </Button>
                  </div>
                </Col>
              </Row>
            </>
          )}
          {showSaving && (
            <>
              <Row>
                <Col>
                  <h4>RESULTADO: {rolled}</h4>
                  <div className="d-flex justify-content-center  mt-2">
                    <Button
                      variant="primary"
                      onClick={() => {
                        rollCheck(props.mod, false);
                      }}
                    >
                      Rerolar
                    </Button>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <button
        className="btn"
        onClick={() => {
          handleShow();
        }}
      >
        <div className="col text-center">
          <h4>{props.title}</h4>
          <h5>{props.value}</h5>
          <h5 className="border">{props.mod}</h5>
        </div>
      </button>
    </div>
  );
};

export default Attr;
