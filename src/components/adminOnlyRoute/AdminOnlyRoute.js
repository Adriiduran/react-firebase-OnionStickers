import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "adriiiduraan@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "90vh" }}>
      <div className="container">
        <h2>Permiso Denegado.</h2>
        <p>Esta página solo la puede ver un administrador.</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Volver a Inicio</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "adriiiduraan@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
