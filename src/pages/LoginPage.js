import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import db, { auth, googleProvider } from "../firebase";

const LoginPage = () => {
  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(async () => {
        const localUser = auth.currentUser;
        alert(`Użytkownik: ${localUser.email}, ${localUser.uid}`);
      })
      .catch((error) => {
        alert(`Błąd: ${error.message}`);
      });

    // auth
    // .signInWithPopup(googleProvider)
    // .then(async () => {
    //   const success = auth.currentUser;
    //   if (success) {
    //     const initials = getInitials(success.displayName);
    //     let currentUser = {
    //       id: success.uid,
    //       name: success.displayName,
    //       email: success.email,
    //       photoURL: success.photoURL,
    //       initials: initials,
    //       recordPrice: 0,
    //     };
    //     const playerRef = db.collection("players").doc(currentUser.id);
    //     const doc = await playerRef.get();
    //     if (!doc.exists) {
    //       await db.collection("players").doc(currentUser.id).set({
    //         id: currentUser.id,
    //         name: currentUser.name,
    //         email: currentUser.email,
    //         photoURL: currentUser.photoURL,
    //         initials: currentUser.initials,
    //         recordPrice: 0,
    //       });
    //     } else {
    //       currentUser = doc.data();
    //     }
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: currentUser,
    //     });
    //     history.push("/dashboard");
    //   }
    // })
    // .catch((error) => {
    //   alert(error.message);
    // });
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
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
