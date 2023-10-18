import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm ";
import ContactForm2 from "./demoContact";

function MyVerticallyCenteredModal({ show, handleClose }) {
  return (
    <Modal
      // {...props}
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        <div style={{ display: "block" }}>
          <h4 className="" style={{ fontWeight: "700" }}>
            Schedule Pickup
          </h4>
          <p>All your rides for the coming days will be displayed here</p>
        </div>
      </Modal.Header>
      <Modal.Body style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <ContactForm/>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide} >Proceed</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
