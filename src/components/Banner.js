import Carousel from "react-bootstrap/Carousel";
import { auto, auto2, auto3, auto4 } from "../assets";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Banner.css";
import ContactForm from "./ContactForm ";
import MyVerticallyCenteredModal from "./Modals";
import { useEffect, useRef, useState } from "react";

function Banner() {
  // const [modalShow, setModalShow] = useState(false);
  
  //  const [mobileNumber, setMobileNumber] = useState("");
   const [showModal, setShowModal] = useState(false);

   const vidRef=useRef();

useEffect(() => { vidRef.current.play(); },[]);
  
  
  
  
  //  const handleMobileNumberChange = (event) => {
  //    setMobileNumber(event.target.value);
  //  };

   const handleSubmit = () => {
     // Perform any necessary submission logic here

     // Show the modal if a mobile number is provided
       setShowModal(true);
     
   };

   const handleCloseModal = () => {
     setShowModal(false);
   };


  return (
    <>
      <Container  className=" pt-sm-3 p-lg-5">
        <Row style={{ background: "" }}>
          <Col lg={6} className="text-start text-align-center p-5 ">
            <h1 style={{ color: "rgba(3,69,174,255)", fontWeight: "bold"  }}>
              Zero Stress Commute
            </h1>
            <h3 className="my-5" style={{ fontWeight: "500" }}>
              Weekly & Monthly Subscription based <br />{" "}
              <span style={{ color: "green" }}>electric</span> rides for daily
              commute
            </h3>
            <Container>
              <Row className="mt-3">
                {/* <Col xs={6} className="px-0 ">
                  <Form.Group controlId="mobileNumber">
                    <Form.Control
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                      style={{
                        padding: "10px",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                      }}
                    />
                  </Form.Group>
                </Col> */}
                <Col xs={6} className="px-0">
                  <Button
                    className="bookbtn px-lg-4 "
                    onClick={handleSubmit}
                    style={{
                      fontSize: "20px",
                      backgroundColor: "#084aa6",
                      borderRadius: "50px",
                      padding: "12px",
                      width:"150px"
                    }}
                  >
                    Book a slot
                  </Button>
                </Col>
              </Row>

              <MyVerticallyCenteredModal
                show={showModal}
                handleClose={handleCloseModal}
              />
            </Container>
          </Col>
          <Col className="p-0">
            {/* <img
              fluid
              src={auto}
              alt=""
              style={{ width:"100%", height: "500px", borderRadius: "50px" }}
            /> */}
            <video
              style={{ width: "100%", height: "100%" }}
              ref={vidRef}
              muted
              autoPlay
              loop
            >
              <source src="./animation2.mp4" type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
