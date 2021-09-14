import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "";

function home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>What's Up?!  I'm Billy</h2>
        <p>Welcome to my Student Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default home;