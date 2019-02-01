import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <Container fluid className="container-footer">
      <Row className="pb-5">
        <Col>
          <ul className="liste-footer">
            <li className="element-liste-footer">
              Contact
            </li>
            <li>
              Mentions légales
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer-logo">
            <li>
              <img src="/medias/log.png" alt="logo" />
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer">
            <li className="element-liste-footer">
              Qui sommes-nous 
            </li>
            <li>
              Recrutement
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer;