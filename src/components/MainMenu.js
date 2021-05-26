import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { actionTypes } from "../redux/reducer";

const MainMenu = () => {
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT_USER,
    });
  };

  return (
    <div className="main_menu">
      <Link className="menu_link" to="/">
        Strona główna
      </Link>
      <Link className="menu_link" to="/catalog">
        Mój katalog filmów
      </Link>
      <Link className="menu_link" to="/contact">
        Kontakt
      </Link>

      {user ? (
        <button className="menu_link" onClick={logout}>
          {`${user.name} (Wyloguj)`}
        </button>
      ) : (
        <Link className="menu_link" to="/login">
          Logowanie
        </Link>
      )}
    </div>
  );
};

export default MainMenu;
