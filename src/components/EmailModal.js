import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EmailModal() {
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleShow = () => setShow(true);
    const handleClose = () => {
     setShow(false)
  setIsClicked(!isClicked);
};
  return (
    <>
      <Button
        onClick={handleShow}
        style={{ background: "none", color: "#084aa6", border: "none" }}
        variant={isClicked ? "white" : "#f5f5f5"}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailModal;
