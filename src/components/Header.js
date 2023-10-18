import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MyVerticallyCenteredModal from "./Modals";
import { useState } from "react";
import EmailModal from "./EmailModal";

function Header() {
  const [showModal, setShowModal] = useState(false);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSubmit = () => {
     // Perform any necessary submission logic here

     // Show the modal if a mobile number is provided
     setShowModal(true);
   };

   const handleCloseModal = () => {
     setShowModal(false);
   };

  
  //  CSS-----------------------
   const customTitleStyle = {
     fontSize: "18px",
     marginRight: "17px",
     fontWeight: 500,
   };

   const customColor = {
     color: "#084aa6", // Set your desired custom color here
   };
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          sticky="top"
          className="bg-white mb-3 px-lg-5 pt-lg-5 pb-lg-1 p-sm-2 "
        >
          <Container fluid className="p-1">
            <Navbar.Brand href="#">
              {" "}
              <img src="./logo.jpg" alt="" style={{ height: "60px" }} />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 "
                  style={{}}
                >
                  <Nav.Link
                    href="#action1"
                    className="headlink"
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                    }}
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    href="#action2"
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                    }}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                    }}
                    onClick={handleSubmit}
                  >
                    book slot
                  </Nav.Link>
                  <MyVerticallyCenteredModal
                    show={showModal}
                    handleClose={handleCloseModal}
                  />
                  <NavDropdown
                    title={
                      <span style={{ ...customTitleStyle, ...customColor }}>
                        Investors
                      </span>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      fontWeight: 500,
                      padding: "0",
                    }}
                  >
                    <NavDropdown.Item href="#action3">
                      {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                      </Button> */}
                      <EmailModal show={show} onHide={handleClose} />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Customer Dashboard
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                  </NavDropdown>
                  <Nav.Link
                    href="#action2"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#084aa6",
                    }}
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
