// import { useState } from "react";
// import { Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function EmailModal() {
//   const [show, setShow] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//  const [email, setEmail] = useState("");

//  const handleEmailChange = (e) => {
//    setEmail(e.target.value);
//  };

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    // Add your logic for handling the form submission with the email
//    console.log("Submitted email:", email);
//  };


//   const handleShow = () => setShow(true);
//     const handleClose = () => {
//      setShow(false)
//   setIsClicked(!isClicked);
// };
//   return (
//     <>
//       <Button
//         onClick={handleShow}
//         style={{ background: "none", color: "#084aa6", border: "none" }}
//         variant={isClicked ? "white" : "#f5f5f5"}
//       >
//         Pitch Deck
//       </Button>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="pt-3 pb-5">
//           <Form onSubmit={handleSubmit}>
//             {/* <Form.Group controlId="formEmail"> */}
//             <Form.Label>Email address</Form.Label>
//             <div className="d-flex align-items-center">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//               {/* </Form.Group> */}

//               <Button
//                 style={{
//                   backgroundColor: "#084aa6",
//                   color: "white",
//                   borderRadius: "0",
//                   borderTopRightRadius: "15px",
//                   borderBottomRightRadius: "15px",
//                 }}
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </>
//   );
// }

// export default EmailModal;



import React, { useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import EmailFormNew from "./EmailModalUpdated";

function EmailModal() {
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setHasError(false); // Reset error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setHasError(true);
      return;
    }

    // Add your logic for handling the form submission with the email
    console.log("Submitted email:", email);

    // Close the modal after successful submission
    handleClose();
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsClicked(!isClicked);
    setHasError(false); // Reset error when modal is closed
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{ background: "none", color: "#084aa6", border: "none" }}
        variant={isClicked ? "white" : "#f5f5f5"}
      >
        Pitch Deck
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-3 pb-5">
          {/* <Form onSubmit={handleSubmit}>
            <Form.Label>Email address</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={hasError} // Apply Bootstrap's isInvalid prop to show error style
              />
              <Button
                style={{
                  backgroundColor: "#084aa6",
                  color: "white",
                  borderRadius: "0",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  width:"20%"
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
            {hasError && (
              <Alert variant="danger" className="mt-2">
                Email is required.
              </Alert>
            )}
          </Form> */}
          <EmailFormNew/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EmailModal;
