import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import db, { auth, googleProvider } from "../firebase";
import { useStateValue } from "../redux/StateProvider";
import { actionTypes } from "../redux/reducer";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(async () => {
        if (auth.currentUser) {
          let localUser = {
            id: auth.currentUser.uid,
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
          };
          dispatch({
            type: actionTypes.LOGIN_USER,
            user: localUser,
          });

          history.push("/catalog");
        } else {
          alert("Błąd logowania");
        }
      })
      .catch((error) => {
        alert(`Błąd: ${error.message}`);
      });
  };

  return (
    <div className="login">
      <h3>Zaloguj się do serwisu</h3>
      <div className="home_content">
        <Row>
          <Col md={5} lg={5}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Proszę podać swój email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Proszę wpisać swoje hasło"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-block mt-4"
              >
                Zaloguj
              </Button>
            </Form>
            <div className="google_login">
              <p>lub</p>
              <Button
                variant="success"
                type="submit"
                className="btn-block mt-4"
                onClick={googleLogin}
              >
                Zaloguj się z Google
              </Button>
            </div>
          </Col>
          <Col md={1} lg={1}></Col>
          <Col md={6} lg={6}>
            <p className="home_text">
              Zachęcamy do zalogowania się do naszego serwisu. Aktywni
              użytkownicy mają możliwość przeglądania katalogu filmowego oraz
              mogą skontaktować się z adminem strony poprzez formularz
              kontaktowy.
              <br />
              Aby się logować wpisz w pola po lewej swój adres email oraz hasło
              lub skorzystaj z opcji "Zaloguj się z Google".
              <br />
              <br />
              Jeżeli nie jesteś jeszcze naszym Użytkownikiem i nie posiadasz
              konta Google{" "}
              <Link to="/register">załóż konto w naszym serwisie.</Link>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
