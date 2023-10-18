import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./ContactForm.css"; // Import custom CSS file
import { FaMapMarkerAlt, FaBuilding, FaSchool } from "react-icons/fa";
import MyToggleButton from "./ToggleButton";
import MyComponent from "./SelectDays";
import PickupReturnTime from "./pickuptime";
import ToggleColumnLayout from "./ToggleCol";
import ContactForm2 from "./demoContact";
import SubmitModal from "./SubmitModal";

const ContactForm = () => {
  const [activeButton, setActiveButton] = useState("office"); // Track the active button
  const [isdaysValid,setIsDaysValid] =useState(null)
  const [activePickupButton, setPickupActiveButton] = useState("yes");
  const [selectedDays, setSelectedDays] = useState([]);
  const [showForm, setShowForm] = useState(true); // Control form visibility
  const [selectedGender, setSelectedGender] = useState("");
      const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const [formValues, setFormValues] = useState({
    name: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    gender: "",
    pickupTime: "",
    returnTime: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: null });
  };




  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowForm(true); // Show the form when a button is clicked
  };

  const handleFormClose = () => {
    setShowForm(false); // Close the form
  };

  const handleGenderSelect = (event) => {
    setSelectedGender(event.target.value);
  };

  // -------------------- select days------------------

  // const handleDaySelect = (day) => {
  //   setSelectedDays((prevSelectedDays) => {
  //     if (prevSelectedDays.includes(day)) {
  //       return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
  //     } else {
  //       return [...prevSelectedDays, day];
  //     }
  //   });
  // };
  const handleDaySelect = (day) => {
    const updatedSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updatedSelectedDays);
    setErrors({ ...errors, selectedDays: null });
  };

// -----------handle check box-----------------
// const handleCheckboxChange = (day) => {
//   const updatedDays = formValues.daysOfWeek ? [...formValues.daysOfWeek] : [];

//   const index = updatedDays.indexOf(day);
//   if (index !== -1) {
//     updatedDays.splice(index, 1);
//   } else {
//     updatedDays.push(day);
//   }

//   setFormValues({
//     ...formValues,
//     daysOfWeek: updatedDays,
//   });
// };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const updatedCheckboxes = [...selectedCheckboxes];
    if (updatedCheckboxes.includes(checkboxValue)) {
      // Remove the checkbox if it was already selected
      const index = updatedCheckboxes.indexOf(checkboxValue);
      updatedCheckboxes.splice(index, 1);
    } else {
      // Add the checkbox if it was not selected
      updatedCheckboxes.push(checkboxValue);
    }

    setSelectedCheckboxes(updatedCheckboxes);
         console.log(updatedCheckboxes);

  };



const isFormFilled = () => {
  // Check if all fields are filled (non-empty)
  return Object.values(formValues).every((value) => value.trim() !== "");
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    console.log({ formValues });
    console.log(activePickupButton)

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

    console.log({selectedCheckboxes})
    console.log(selectedCheckboxes.length)
    if (selectedCheckboxes.length == 0) {
      setIsDaysValid(false)
      newErrors.selectedDays = "Select atleast one"
      console.log("select atleast one")
    }
    else {
      setIsDaysValid(true);
      

    }
    console.log(isdaysValid)
     if (!activePickupButton) {
       // Validate selected days (at least one day must be selected)
       // if (selectedDays.length === 0) {
       //   newErrors.selectedDays = "Please select at least one day";
       // }
       //  if (formValues.daysOfWeek.length === 0) {
       //    newErrors.daysOfWeek = "Please select at least one day";
       //  }

       // if (selectedCheckboxes.size === 0) {
       //   alert("Please select at least one checkbox before submitting.");
       // } else {
       //   // Handle form submission logic here
       //   console.log("Form submitted successfully!", selectedCheckboxes);
       // }
       // Validate toggle button
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

    if (Object.keys(newErrors).size === 0) {
      console.log("Form submitted with values:", {
        ...formValues,
        selectedDays,
      });
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

  return (
    <Container fluid>
      {/* ---------Toggle office and school---------------------- */}
      <div className=" d-flex">
        <Button
          className={`custom-button ${
            activeButton === "office" ? "active" : ""
          } ${activeButton === "office" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleButtonClick("office")}
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <FaBuilding /> &nbsp; Office
        </Button>
        <Button
          className={`custom-button ${
            activeButton === "school" ? "active" : ""
          } ${activeButton === "school" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleButtonClick("school")}
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <FaSchool /> &nbsp; School
        </Button>
      </div>
      {showForm && (
        <div className="mt-4">
          {/* <button onClick={handleFormClose} className="close-button">
            Close Form
          </button> */}
          {activeButton === "office" && (
            <>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
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
                        {/* <FaMapMarkerAlt className="icon" /> */}
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
                        {/* <FaMapMarkerAlt className="icon" /> */}
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
                            activePickupButton === "yes"
                              ? "btn-primary"
                              : "btn-light"
                          }`}
                          onClick={() => setPickupActiveButton("yes")}
                        >
                          Yes
                        </Button>
                        <Button
                          className={`toggle-button ${
                            activePickupButton === "no" ? "active" : ""
                          }${
                            activePickupButton === "no"
                              ? "btn-primary"
                              : "btn-light"
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
                    {/* <Row>
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
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
                        )
                      )}
                    </Row> */}
                    <label>
                      <input
                        type="checkbox"
                        value="option1"
                        checked={selectedCheckboxes.includes("option1")}
                        onChange={handleCheckboxChange}
                      />
                      Option 1
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="option2"
                        checked={selectedCheckboxes.includes("option2")}
                        onChange={handleCheckboxChange}
                      />
                      Option 2
                    </label>
                    {isdaysValid ? <div>
                    
                    {isdaysValid ==false? <div>invalid</div> : null}
                    </div> : null}
                  
                  
                    <label> </label>

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
            </>
          )}

          {activeButton === "school" && (
            <>
              {/* <h2>School Form</h2> */}
              {/* <ContactForm2 /> */}
              <Form>
                {/* Add your school form fields here */}
                <Form.Group controlId="schoolForm">
                  <Row className="mb-3">
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
                  {/* <div className="input-container">
                    <FaMapMarkerAlt className="icon" />
                    <input
                      type="text"
                      placeholder="Select pickup location"
                      className="form-control"
                    />
                  </div>
                  <div className="input-container">
                    <FaMapMarkerAlt className="icon" />
                    <input
                      type="text"
                      placeholder="Select the School"
                      className="form-control"
                    />
                  </div> */}
                  {/* ------------- pickuo drop locATION--------------------- */}
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="input-container">
                        <FaMapMarkerAlt className="icon" />
                        <input
                          type="text"
                          placeholder=" pickup location"
                          className="form-control"
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="input-container">
                        <FaMapMarkerAlt className="icon" />
                        <input
                          type="text"
                          placeholder="Select drop location"
                          className="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
                {/* Add more form fields as needed */}
                <PickupReturnTime />
                {/* ----------age and start date---------- */}
                <Container className="my-4">
                  <Row>
                    <Col xs={6} md={3}>
                      <Form.Group controlId="ageSelect">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Select Age
                        </Form.Label>
                        <Form.Control type="number" min="1" max="100" />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={3}>
                      <Form.Group controlId="dateSelect">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Select Date
                        </Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
                {/* <ToggleColumnLayout /> */}
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "20px",
                    backgroundColor: "#084aa6",
                    color: "white",
                    border: "none",
                  }}
                >
                  Proceed
                </button>
              </Form>
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default ContactForm;
