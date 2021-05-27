import React, { useState } from "react";
import db, { auth, googleProvider } from "../firebase";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const register = () => {
    const fullName = `${firstName} ${lastName}`;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // imie i nazwisko
        // wysłać  email do weryfikacji
        // zapisać emailToVerify
        // przenieść uzytkownika na stronę emailverification
        setRegisterError("OK !!!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setRegisterError("Podany adres email jest już zarejestrowany.");
        } else if (error.code === "auth/weak-password") {
          setRegisterError("Minimalna długość hasła to 6 znaków.");
        } else {
          setRegisterError("Wystąpił błąd. Proszę spróbować jeszcze raz.");
        }
      });
  };

  return (
    <div className="login">
      <h3>Załóż konto w serwisie</h3>
      <div className="home_content">
        <Row>
          <Col md={5} lg={5}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Proszę podać swój email"
                  value={email}
                  onChange={changeEmail}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Proszę podać swoje imię"
                  value={firstName}
                  onChange={changeFirstName}
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Proszę podać swoje nazwisko"
                  value={lastName}
                  onChange={changeLastName}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Proszę wpisać swoje hasło"
                  value={password}
                  onChange={changePassword}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="btn-block mt-4"
                type="button"
                onClick={register}
              >
                Załóż konto
              </Button>
            </Form>
          </Col>
          <Col md={1} lg={1}></Col>
          <Col md={6} lg={6}>
            <p className="home_text">
              Zachęcamy do założenia konta w naszym serwisie. Aktywni
              użytkownicy mają możliwość przeglądania katalogu filmowego oraz
              mogą skontaktować się z adminem strony poprzez formularz
              kontaktowy.
              <br />
              <br />
              Jeżeli posiadasz już konto w naszym serwisie{" "}
              <Link to="/login">zaloguj się.</Link>
            </p>
            <br />
            {registerError ? (
              <Alert variant="danger">{registerError}</Alert>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterPage;
