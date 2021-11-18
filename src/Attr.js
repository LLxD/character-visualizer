import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { DiceRoll } from "rpg-dice-roller";

const Attr = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCheck, setShowCheck] = useState(false);
  const [rolled, setRolled] = useState("0");

  const rollCheck = (mod) => {
    const roll = new DiceRoll("d20" + mod);
    setRolled(roll.output);
    setShowCheck(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>VAMO ROLAR {props.title} CARAI!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showCheck && (
            <div>
              Quer fazer um Check ou Saving Throw?
              <div className="d-flex justify-content-center  mt-2">
                <Button
                  className="mx-2"
                  variant="primary"
                  onClick={() => {
                    rollCheck(props.mod);
                  }}
                >
                  Check
                </Button>
              </div>
            </div>
          )}
          {showCheck && <h4>RESULTADO: {rolled}</h4>}
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
    </>
  );
};

export default Attr;
