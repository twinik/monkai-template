import * as React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright-wrapper">
            <div className="copyright">
              © 2021 Holy Villains | All rights reserved.
            </div>
            {/* 
                <div className="copyright powerd-by">– Powered by <a href="https://upperechelonstudios.io/" className="copyright-link">Upper Echelon Studios</a></div> */}
          </div>
          <div className="copyright-wrapper">
            <div className="copyright smart-address">
              {/* 
                    Smart Contract - <a href="https://etherscan.io/address/0x00FA82eA9BE4E24ec6D7ED86ef93bfe85b9a3e68" target="_blank" className="copyright-link">0x00FA82eA9BE4E24ec6D7ED86ef93bfe85b9a3e68</a> */}
            </div>
          </div>
          <div className="footer-link-wrapper">
            <a
              href="https://raritysniper.com/holy-heroes"
              rel="noreferrer"
              target="_blank"
              className="social--link w-inline-block"
            >
              Rarity Sniper
            </a>
            {/* <a href="/privacy-policy" className="legal-link">Privacy Policy</a><a href="/terms-of-service" className="legal-link right">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
