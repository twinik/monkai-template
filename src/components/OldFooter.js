import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div id="footer-wrapper">
        <img
          id="footer-logo"
          src={logo}
          alt="Holy NFT"
        />
        <div id="quick-links">
          <h5>Quick Links</h5>
          <br />
          <br />
          <a
            href="https://discord.com/"
            rel="noreferrer"
            target="_blank"
          >
            Discord
          </a>
          <br />
          <br />
          <a
            href="https://twitter.com/"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <br />
          <br />
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <br />
          <br />
          <a href="https://opensea.io/" rel="noreferrer" target="_blank">
            OpenSea
          </a>
          <br />
          <br />
          <a href="https://etherscan.io/" rel="noreferrer" target="_blank">
            Etherscan
          </a>
        </div>
        <div id="company">
          <h5>Company</h5>
          <br />
          <br />
          <a href="mailto:">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
