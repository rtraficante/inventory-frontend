import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";
import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">Inventory</li>
        <li className="nav-link">Dashboard</li>
        {!isLoading && !user && (
          <li className="login nav-link" onClick={() => loginWithRedirect()}>
            Login
          </li>
        )}
        {!isLoading && user && (
          <li className="logout nav-link" onClick={() => logout()}>
            Logout
          </li>
        )}
      </ul>
      {/* {!isLoading && !user && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {!isLoading && user && <button onClick={() => logout()}>Logout</button>} */}
    </nav>
  );
};

export default Navbar;
