import React, { useState } from "react";
import "../styles/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import "./Feed.css";
import ghostSlider1Mp4 from "../images/ghost-slider-1.mp4";
import ghostSlider2Mp4 from "../images/ghost-slider-2.mp4";
import ghostSlider3Mp4 from "../images/ghost-slider-3.mp4";
import ghostSlider4Mp4 from "../images/ghost-slider-4.mp4";
import ghostSlider1Webm from "../images/ghost-slider-1.webm";
import ghostSlider2Webm from "../images/ghost-slider-2.webm";
import ghostSlider3Webm from "../images/ghost-slider-3.webm";
import ghostSlider4Webm from "../images/ghost-slider-4.webm";
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
              <source src={ghostSlider1Webm} type="video/webm" />
              <source src={ghostSlider1Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostSlider2Webm} type="video/webm" />
              <source src={ghostSlider2Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostSlider3Webm} type="video/webm" />
              <source src={ghostSlider3Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostSlider4Webm} type="video/webm" />
              <source src={ghostSlider4Mp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="padding-wrapper lg:mt-6">
        <div className="container feed">
          <div id="mission" className="feed-rte alt w-richtext">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
              <div className="mission-img text-center w-6/12 mx-auto mb-12">
                <img src={missionLogo} alt="" />
              </div>
            </ScrollAnimation>
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
