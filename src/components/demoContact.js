import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import SubmitModal from "./SubmitModal";

const ContactForm2 = () => {
const [formValues, setFormValues] = useState({
  name: "",
  mobileNumber: "",
  pickupLocation: "",
  dropLocation: "",
  gender: "",
  pickupTime: "",
  returnTime: "",
});

    const [selectedDays, setSelectedDays] = useState([]);
    const [errors, setErrors] = useState({});
    const [activePickupButton, setPickupActiveButton] = useState("yes");
    const [showModal, setShowModal] = useState(false);


  

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
  setErrors({ ...errors, [name]: null });
  };
  
const handleDaySelect = (day) => {
  const updatedSelectedDays = selectedDays.includes(day)
    ? selectedDays.filter((d) => d !== day)
    : [...selectedDays, day];
  setSelectedDays(updatedSelectedDays);
    setErrors({ ...errors, selectedDays: null });
    

    
};

     const isFormFilled = () => {
       // Check if all fields are filled (non-empty)
       return Object.values(formValues).every((value) => value.trim() !== "");
     };
const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};

  // Validate name (required)
  if (!formValues.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Validate mobile number (required, numeric, 10 characters)
  if (!formValues.mobileNumber.trim()) {
    newErrors.mobileNumber = "Mobile number is required";
  } else if (!/^\d{10}$/.test(formValues.mobileNumber)) {
    newErrors.mobileNumber = "Invalid mobile number";
  }

  // Validate gender (required)
  if (!formValues.gender) {
    newErrors.gender = "Gender is required";
  }

  // Validate pickup location (required)
  if (!formValues.pickupLocation.trim()) {
    newErrors.pickupLocation = "Pickup location is required";
  }

  // Validate drop location (required)
  if (!formValues.dropLocation.trim()) {
    newErrors.dropLocation = "Drop location is required";
  }

  // Validate pickup time (required)
  if (!formValues.pickupTime.trim()) {
    newErrors.pickupTime = "Pickup time is required";
  }

  // Validate return time (required)
  if (!formValues.returnTime.trim()) {
    newErrors.returnTime = "Return time is required";
  }

  // Validate selected days (at least one day must be selected)
  if (selectedDays.length === 0) {
    newErrors.selectedDays = "Please select at least one day";
  }

  // Validate toggle button
  if (!activePickupButton) {
    newErrors.activePickupButton = "Please select an option";
  }

  // Set errors
  setErrors(newErrors);

    // If there are no errors, proceed with form submission
    //  if (isValid) {
    //    // Form is valid, show the modal
    //    handleShow();
    //  } else {
    //    // Form is invalid, display errors
    //    console.log("Form is invalid. Errors:", errors);
    //  }

    
    if (Object.keys(newErrors).length === 0) {
    console.log("Form submitted with values:", { ...formValues, selectedDays });
    }


      if (isFormFilled()) {
          // All fields are filled
              handleShow();

        console.log("Form is filled:", formValues);
      } else {
      alert("Error in form. Please fill all fields.");
        // Some fields are not filled
        console.log("Form is not completely filled.");
      }
};
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


//   const [formValues, setFormValues] = useState({
//     name: "",
//     mobileNumber: "",
//     pickupLocation: "",
//     dropLocation: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     setErrors({ ...errors, [name]: null });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     // Validate name (required)
//     if (!formValues.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     // Validate mobile number (required, numeric, 10 characters)
//     if (!formValues.mobileNumber.trim()) {
//       newErrors.mobileNumber = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(formValues.mobileNumber)) {
//       newErrors.mobileNumber = "Invalid mobile number";
//     }

//     // Validate gender (required)
//     if (!formValues.gender) {
//       newErrors.gender = "Gender is required";
//     }

//     // Validate pickup location (required)
//     if (!formValues.pickupLocation.trim()) {
//       newErrors.pickupLocation = "Pickup location is required";
//     }

//     // Validate drop location (required)
//     if (!formValues.dropLocation.trim()) {
//       newErrors.dropLocation = "Drop location is required";
//     }

//     // Set errors
//     setErrors(newErrors);

//     // If there are no errors, proceed with form submission
//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form submitted with values:", formValues);
//     }
//   };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        {/* Rest of the form code */}
        {/* ... */}

        <Row className="mb-3">
          {/* ... */}

          {/* Name */}
          <Col xs={12} md={4}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Mobile Number */}
          <Col xs={12} md={4}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Mobile number"
                name="mobileNumber"
                value={formValues.mobileNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.mobileNumber}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobileNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Gender */}
          <Col xs={12} md={4}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formValues.gender}
                onChange={handleInputChange}
                isInvalid={!!errors.gender}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Pickup and Drop Location */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formPickupLocation">
              <div className="input-container">
                <FaMapMarkerAlt className="icon" />
                <Form.Control
                  type="text"
                  placeholder="Pickup location"
                  name="pickupLocation"
                  value={formValues.pickupLocation}
                  onChange={handleInputChange}
                  isInvalid={!!errors.pickupLocation}
                  required
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.pickupLocation}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formDropLocation">
              <div className="input-container">
                <FaMapMarkerAlt className="icon" />
                <Form.Control
                  type="text"
                  placeholder="Select drop location"
                  name="dropLocation"
                  value={formValues.dropLocation}
                  onChange={handleInputChange}
                  isInvalid={!!errors.dropLocation}
                  required
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.dropLocation}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Toggle yes/no */}
        <Row>
          <div
            className="d-flex justify-content-between p-3 my-4"
            style={{ backgroundColor: "white" }}
          >
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginBottom: "0px",
                }}
              >
                You need a return pickup ?
              </p>
              <p className="mb-0">configure the window for pickup</p>
            </div>
            <div>
              <div className="d-flex">
                {/* -----------------toggle btn---------------------- */}
                <Button
                  className={`toggle-button ${
                    activePickupButton === "yes" ? "active" : ""
                  }${
                    activePickupButton === "yes" ? "btn-primary" : "btn-light"
                  }`}
                  onClick={() => setPickupActiveButton("yes")}
                >
                  Yes
                </Button>
                <Button
                  className={`toggle-button ${
                    activePickupButton === "no" ? "active" : ""
                  }${
                    activePickupButton === "no" ? "btn-primary" : "btn-light"
                  }`}
                  onClick={() => setPickupActiveButton("no")}
                >
                  No
                </Button>
              </div>
              {errors.activePickupButton && (
                <div className="error">{errors.activePickupButton}</div>
              )}
            </div>
          </div>
        </Row>
        {/* --------------------SELECT DAYS---------------------- */}
        <Row>
          <Container>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              Selected Days
            </p>
            <Row>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Col key={day} xs={2} xl={1}>
                  <Form.Check
                    type="checkbox"
                    id={day}
                    label={day}
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDaySelect(day)}
                    // style={{ border:"2px solid blue" }}
                  />
                </Col>
              ))}
            </Row>
            <Row className="mt-3">
              <Col>
                <p>Selected days: {selectedDays.join(", ")}</p>
              </Col>
            </Row>
          </Container>
        </Row>

        {/* <MyComponent /> */}
        {/* -----------------PICKUP- RETUREN TIME ---------------------- */}
        <Row>
          <Container className="my-4">
            {/* <h1>Cab Service App</h1> */}
            <Row>
              <Col xs={6} md={3}>
                <Form.Group controlId="pickupTime">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Pickup Time
                  </Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
              </Col>
              <Col xs={6} md={3}>
                <Form.Group controlId="returnTime">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Return Time
                  </Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Row>
        {/* Proceed Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "20px",
            backgroundColor: "#084aa6",
            color: "white",
            border: "none",
          }}
          onClick={handleSubmit}
        >
          Proceed2
        </button>
        <SubmitModal show={showModal} handleClose={handleClose} />
      </Form>
    </Container>
  );
};

export default ContactForm2;
