import React from 'react';

import Ecommerce from "../../assets/images/ecommerce1.png";
import Employee from "../../assets/images/employee1.png";
import Notetaker from "../../assets/images/notetaker1.png";
import Scheduleme from "../../assets/images/schedulemepic.png";
import Schooly from "../../assets/images/schooly_screenshot.png";
import TeamGen from "../../assets/images/teamgen3.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={Scheduleme}
              alt="Schedule.Me"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/ChainRxn12/schedule.me" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://chainrxn12.github.io/schedule.me/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={Schooly}
              alt="Schooly"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/ChainRxn12/schooly" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://fierce-retreat-28707.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={TeamGen}
              alt="Team Generator"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/ChainRxn12/team-generator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://www.youtube.com/watch?v=K0vzRHZEsxc" target="_blank" rel="noreferrer">
                <button>Video</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={Ecommerce}
              alt="Ecommerce"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/ChainRxn12/Ecommerce" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://www.youtube.com/watch?v=uprYtpRwmUM" target="_blank" rel="noreferrer">
                <button>Video</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={Employee}
              alt="Employee"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/ChainRxn12/employee-o-matic" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://www.youtube.com/watch?v=1vVk64xBg4E" target="_blank" rel="noreferrer">
                <button>Video</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={Notetaker}
              alt="Notetaker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/ChainRxn12/Note-Taker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://stark-anchorage-78529.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;