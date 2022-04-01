import React from "react";
import loadable from "@loadable/component";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const Navbar = loadable(() => import("./components/Navbar.jsx"));
const Claim = loadable(() => import("./components/Claim.js"));
const Footer = loadable(() => import("./components/Footer.jsx"));
const Feed = loadable(() => import("./components/Feed.jsx"));
const Roadmap = loadable(() => import("./components/Roadmap.jsx"));
const FAQ = loadable(() => import("./components/FAQ.jsx"));
const Team = loadable(() => import("./components/Team.jsx"));
const MobileHeader = loadable(() => import("./components/MobileHeader.js"));
const DialogComponent = loadable(() =>
  import("./components/DialogComponent.js")
);

const getLibrary = (provider) => new ethers.providers.Web3Provider(provider);

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div id="app">
        <Navbar />
        <DialogComponent />
        <Claim />
        <Feed />
        <Roadmap />
        <FAQ />
        <Team />
        <Footer />
      </div>

      <MobileHeader />
    </Web3ReactProvider>
  );
};

export default App;
