import React from 'react';

import ResumePng from "../../assets/images/resume.png";

function Resume() {
  return (
    <section className="portfolio">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <h1>Download Resume Below</h1>
        <div className="col">
          <div className="card">
            <img src={ResumePng} alt="Resume" className="card-img-top" />

            <div className="card-body">
              <a
                href="https://docs.google.com/document/d/1v8KIwnzukdQiuuUWJRe6HioYg925ErQ0Qh2kq8UJlgs/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

