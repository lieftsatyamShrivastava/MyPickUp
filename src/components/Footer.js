import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./footer.css"


const Footer = () => {
  return (
    <Container fluid className="footercss p-5">
      {/* Header */}
      {/* <header>
        <Row>
          <Col xs={12} className="p-4">
            <img src="./logo.jpg" alt="Logo" />
          </Col>
        </Row>
      </header> */}

      {/* Main content */}
      <main>
        <Row>
          {/* Social links */}
          <Col xs={12} md={3}>
            <img src="./logodark.png" alt="Logo" style={{height:"80px"}}/>
          </Col>
          {/* Quick links */}
          <Col xs={12} md={3}>
            {/* <h4 className="mb-2">quick links</h4> */}
            <ul className="quick-links" style={{ listStyle: "none" }}>
              <li className="my-1">
                <a
                  href="link_to_quick_link1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                 Home
                </a>
              </li>
              <li className="my-1">
                <a
                  href="link_to_quick_link2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About us
                </a>
              </li>

              <li className="my-1">
                <a
                  href="link_to_quick_link3"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Book Slot
                </a>
              </li>
              {/* <li className="my-1">
                <a
                  href="link_to_quick_link2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  FAQs
                </a>
              </li> */}
            </ul>
          </Col>
          <Col xs={12} md={3}>
            {/* <h4 className="mb-2">Quick Links</h4> */}
            <ul className="quick-links" style={{ listStyle: "none" }}>
              <li className="my-1">
                <a
                  href="link_to_quick_link1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                 Pitch Deck
                </a>
              </li>
              <li className="my-1">
                <a
                  href="link_to_quick_link2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                   dashboard
                </a>
              </li>

              <li className="my-1">
                <a
                  href="link_to_quick_link3"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </a>
              </li>
              {/* <li className="my-1">
                <a
                  href="link_to_quick_link2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  FAQs
                </a>
              </li> */}
            </ul>
          </Col>
          <Col xs={12} md={3}>
            {/* <h4 className="mb-2"> social Links</h4> */}
            <ul className="social-links" style={{ listStyle: "none" }}>
              <li>
                <a
                  href="your_facebook_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="your_twitter_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="your_instagram_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </main>
      <hr />

      {/* Footer */}
      <footer>
        <Row>
          <Col xs={12}>
            <p>&copy; 2023 mypickup</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
