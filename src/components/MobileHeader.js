import React from 'react';

const navClick = (navName) => {
  const app = document.getElementById('app');
  const mobileHeader = document.getElementById('mobile-header');
  app.style.display = 'block';
  mobileHeader.style.display = 'none';
  window.location.href = '#' + navName;
};

const xClick = () => {
  const app = document.getElementById('app');
  const mobileHeader = document.getElementById('mobile-header');
  app.style.display = 'block';
  mobileHeader.style.display = 'none';
};

const MobileHeader = () => {
  return (
    <div id="mobile-header">
      <svg
        onClick={() => xClick()}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1.66699V20.3337"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66699 11H20.3337"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div id="mobile-header-wrapper">
        <p onClick={() => navClick('mint')}>Mint</p>
        <p onClick={() => navClick('story')}>Story</p>
        <p onClick={() => navClick('featured')}>Featured Apes</p>
        <p onClick={() => navClick('roadmap-mobile')}>Roadmap</p>
        <p onClick={() => navClick('jungle')}>$JUNGLE</p>
        <p onClick={() => navClick('team')}>Team</p>
        <p onClick={() => navClick('faq')}>FAQ</p>
      </div>
    </div>
  );
};

export default MobileHeader;
