import React, { useState } from "react";
import "../styles/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import "./Feed.css";

import kappaMp4 from "../images/pixel-video/kappa.mp4";
import yetiMp4 from "../images/pixel-video/yeti.mp4";
import foxMp4 from "../images/pixel-video/fox.mp4";
import macaqueMp4 from "../images/pixel-video/macaque.mp4";
import spiritedAwayMp4 from "../images/pixel-video/spirited-away.mp4";
import nezukoMp4 from "../images/pixel-video/nezuko.mp4";
import cyberMp4 from "../images/pixel-video/cyber.mp4";

import kappaWebm from "../images/pixel-webm/kappa.webm";
import yetiWebm from "../images/pixel-webm/yeti.webm";
import foxWebm from "../images/pixel-webm/fox.webm";
import macaqueWebm from "../images/pixel-webm/macaque.webm";
import spiritedAwayWebm from "../images/pixel-webm/spirited-away.webm";
import nezukoWebm from "../images/pixel-webm/nezuko.webm";
import cyberWebm from "../images/pixel-webm/cyber.webm";

import missionLogo from "../images/mission-logo.png";
const Feed = () => {
  const missions = [
    {
      icon: "heart",
      text: "Holy NFT is striving to create a positive and active community.",
    },
    {
      icon: "sword",
      text: "Just like the heroes, we also will provide financial literacy resources to marginalized communities.",
    },
    {
      icon: "joystick",
      text: "Our own survival based video game will come to fruition as we compete against the heroes.",
    },
    {
      icon: "coin",
      text: "Our own native cryptocurrency and staking rewards will be available, this is where you can earn passive income.",
    },
    {
      icon: "fire",
      text: "The HolyVerse will continue to be populated with more NFTs as our metaverse expands.",
    },
    {
      icon: "beer",
      text: "With major marketing influence, we plan on continuing to grow and take part in real life events to provide more utility to our NFTs ",
    },
  ];
  const [hover, setHover] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const handleHover = (index) => {
    setHover({ ...hover, [index]: true });
    console.log(hover);
  };

  return (
    <section className="section feed">
      <div className="ghost-wrapper">
        <div className="ghost-slider">
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={kappaWebm} type="video/webm" />
              <source src={kappaMp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={yetiWebm} type="video/webm" />
              <source src={yetiMp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={foxWebm} type="video/webm" />
              <source src={foxMp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={macaqueWebm} type="video/webm" />
              <source src={macaqueMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="ghost-wrapper">
        <div className="ghost-slider">
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={spiritedAwayWebm} type="video/webm" />
              <source src={spiritedAwayMp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={nezukoWebm} type="video/webm" />
              <source src={nezukoMp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={cyberWebm} type="video/webm" />
              <source src={cyberMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="padding-wrapper lg:mt-6">
        <div className="container feed">
          <div id="mission" className="feed-rte alt w-richtext">
            {missions.map((mission, index) => {
              return (
                <ScrollAnimation
                  key={`${mission} ${index} `}
                  animateIn="bounceInLeft"
                  animateOut="bounceOutRight"
                >
                  <div
                    className={`mission-item flex flex-col md:flex-row items-center justify-start  md:mb-6`}
                  >
                    <span
                      onMouseOver={() => {
                        handleHover(index);
                      }}
                      className={`${mission.icon} mission-icon my-4 md:my-0  `}
                    ></span>
                    <p
                      className={`mission-description mission-description block`}
                    >
                      {mission.text}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
      <div id="feed" className="feed-marker"></div>
    </section>
  );
};

export default Feed;
