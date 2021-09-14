import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/ChainRxn12" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/billy-dorman-b51129205/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/thebdofficial/" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;