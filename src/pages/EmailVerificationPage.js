import React from "react";
import { Col, Row } from "react-bootstrap";

const EmailVerificationPage = () => {
  return (
    <div className="email-verification">
      <Row>
        <Col md={12} lg={12}>
          <h2>Rejestracja udana</h2>
          <p className="email-verification-text">
            Na adres email: xxx@wp.pl został wysłany link do aktywcji Twojego
            konta w serwisie.
            <br />
            Proszę sprawdź swoją skrzynkę email.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default EmailVerificationPage;
