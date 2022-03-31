import * as React from "react";
import "./Roadmap.css";
import roadmap from "./../images/roadmap interactive.png";

const Roadmap = () => {
  return (
    <section className="section roadmap mb-6 py-10 lg:py-12">
      <div className="padding-wrapper">
        <div className="container">
          <h2 className="text-center mb-6">
            <strong>Roadmap</strong>
          </h2>
          <div className="roadmap-grid"></div>
          <div className="roadmap-image mb-32">
            <div className="roadmap__line w-full"></div>

            <div className="my-5 w-full text-center relative md:w-8/12 xl:w-9/12 mx-auto flex justify-center items-center">
              <img src={roadmap} alt="Roadmap" className="roadmap-image" />

              <div className="goal first-goal "></div>
              <div className="goal-description first-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>1- HolyVerse is Created.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal second-goal "></div>
              <div className="goal-description second-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        2- Holy Hero’s collections comes to fruition as the
                        first characters in the game all in gifs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal third-goal "></div>
              <div className="goal-description third-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>3- PDF drops on attaining financial literacy.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal fourth-goal "></div>
              <div className="goal-description fourth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>4- Updates on our Mario inspired video game.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal fifth-goal "></div>
              <div className="goal-description fifth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>5- Merchandise store to give your heroes some drip.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal sixth-goal "></div>
              <div className="goal-description sixth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        6- Community events with HolyVerse holders in New York
                        City.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal seventh-goal "></div>
              <div className="goal-description seventh-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        7- Working with local governments and school boards to
                        create proper educational content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal eighth-goal "></div>
              <div className="goal-description eighth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        8- Airdrop static profile pictures of the Holy Heros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal ninth-goal "></div>
              <div className="goal-description ninth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        9- Raise more public awareness about the lack of
                        education across the country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="goal tenth-goal "></div>
              <div className="goal-description tenth-goal-description absolute">
                <div className="roadmap-item w-full">
                  <div className="roadmap-anchor-line  w-full"></div>
                  <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                    <div className="roadmap-item__content w-full flex items-center">
                      <p>
                        10- Replicate our NFT drops and expand upon the
                        HolyVerse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <small className="roadmap-disclaimer w-full ">
                Click on icons for more info
              </small>
            </div>

            {/* 
                        <div className="roadmap-item w-full">
                            <div className="roadmap-anchor-line  w-full"></div>
                                <div className="roadmap-item__conmtent-wrapper feed-post w-full">
                                    <div className="roadmap-item__content w-full">
                                        <p>1- HolyVerse is Created.</p>
                                        <p>2- Holy Hero’s collections comes to fruition as the first characters in the game all in gifs.</p>
                                        <p>3- PDF drops on attaining financial literacy.</p>
                                        <p>4- Updates on our Mario inspired video game.</p>
                                        <p>5- Merchandise store to give your heroes some drip.</p>
                                        <p>6- Community events with HolyVerse holders in New York City.</p>
                                        <p>7- Working with local governments and school boards to create proper educational content.</p>
                                        <p>8- Airdrop static profile pictures of the Holy Heros.</p>
                                        <p>9- Raise more public awareness about the lack of education across the country.</p>
                                        <p>10- Replicate our NFT drops and expand upon the HolyVerse.</p>
                                    </div>
                                </div>
                         </div> */}
          </div>
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
