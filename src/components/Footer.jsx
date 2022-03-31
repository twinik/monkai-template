import * as React from "react";
import "./Footer.css";

import monkai from "../images/new/monkai_black.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="flex-box">
            <img src={monkai} alt="monkai" className="monkai" />
          </div>
          <div className="copi">
            <p className="copyright">Monkai All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
