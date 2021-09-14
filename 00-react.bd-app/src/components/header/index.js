import React from 'react';
import { Link } from "react-router-dom"
import NavBar from "../NavBar";

function header() {

  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
        <Link to="/">Billy Dorman</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default header;