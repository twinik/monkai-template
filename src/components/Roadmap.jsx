/* eslint-disable jsx-a11y/no-redundant-roles */
import * as React from "react";
import "./Roadmap.css";
import divider from "./../images/divider.svg";
import steps from "../utils/roadmap-content";
import RoadItem from "./RoadItem";

const Roadmap = () => {
  return (
    <section className="section roadmap mb-6 py-10 lg:py-12">
      <div className="padding-wrapper">
        <div className="container">
          {/* ROADMAP HEAD */}
          <div
            data-w-id="1e6e6fbe-53d5-87c6-5696-406ea1dc304e"
            style={{
              opacity: "1",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              backgroundColor: "rgba(185,72,65,.11)",
              boxShadow: "inset 0 0 0 2px #b94841",
              paddingLeft: "5rem",
            }}
            className="section-inner primary-bordered"
          >
            <div className="corner-black bordered-primary top-left"></div>
            <div className="corner-black bordered-primary bottom-right large"></div>
            <h4 className="roadmap-title">SEASON 1 ROADMAP</h4>
            <img src={divider} alt="" className="red" />
            <div className="row w-row">
              <div className="mobile-mb-20 w-col w-col-6 w-col-medium-6">
                <h6 className="text-white">10% MILESTONE</h6>
                <ul
                  role="list"
                  className="text-white-opacity text-small mb-0 w-list-unstyled"
                >
                  <li>Site and contract build</li>
                  <li>Game theory finalized</li>
                  <li>Presale whitelisting complete</li>
                  <li>
                    Storyline introduced
                    <br />
                  </li>
                </ul>
              </div>
              <div className="w-col w-col-6 w-col-medium-6">
                <h6 className="text-white">25% MILESTONE</h6>
                <ul
                  role="list"
                  className="text-white-opacity text-small mb-0 w-list-unstyled"
                >
                  <li>Game roadmap introduced</li>
                  <li>New NFT mechanics revealed</li>
                  <li>Community building and empire selection</li>
                  <li>
                    Mint date determined
                    <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="row w-row">
              <div className="mobile-mb-20 w-col w-col-6">
                <h6 className="text-white">50% MILESTONE</h6>
                <ul
                  role="list"
                  className="text-white-opacity text-small mb-0 w-list-unstyled"
                >
                  <li>Mintings begins</li>
                  <li>Minting sold out and game dates set</li>
                  <li>
                    Fair play analysis and AMA
                    <br />
                  </li>
                  <li>
                    Rarity gallery created
                    <br />
                  </li>
                </ul>
              </div>
              <div className="column-14 w-col w-col-6">
                <h6 className="text-white">100% MILESTONE</h6>
                <ul
                  role="list"
                  className="text-white-opacity text-small mb-0 w-list-unstyled"
                >
                  <li>Factions settled</li>
                  <li>Verdicts begins after countdown</li>
                  <li>Community challenges begin</li>
                  <li>
                    Divine Judgement is cast
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROADMAP STORYLINE */}
          <div className="container-roadMap">
            {steps.map((step, index) => (
              <RoadItem data={step} key={step.title} index={index} />
            ))}
          </div>

          {/* ADDITIONAL */}
          <div className="additional">
            <div className="additional-text ">
              Have something else that you’d want to see from the project?{" "}
              <a
                href="https://discord.gg/nftz"
                rel="noreferrer"
                target="_blank"
                className="text-link"
              >
                Join our Discord
              </a>{" "}
              to join the conversation 🚀
            </div>
          </div>
        </div>
      </div>
      <div id="feed" className="feed-marker"></div>
    </section>
  );
};

export default Roadmap;
