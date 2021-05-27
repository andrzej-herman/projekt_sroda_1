import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import MainMenu from "./components/MainMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <MainMenu />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/catalog" exact component={CatalogPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/emailverification" exact component={EmailVerificationPage} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
