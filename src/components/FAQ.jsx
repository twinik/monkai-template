import * as React from "react";
import "./FAQ.css";
import AccordionItem from "./AccordionItem";

import ghostFaq1Mp4 from "../images/ghost-faq-1.mp4";
import ghostFaq1Webm from "../images/ghost-faq-1.webm";
import ghostFaq2Mp4 from "../images/ghost-faq-2.mp4";
import ghostFaq2Webm from "../images/ghost-faq-2.webm";
import ghostFaq3Mp4 from "../images/ghost-faq-3.mp4";
import ghostFaq3Webm from "../images/ghost-faq-3.webm";
import ghostFaq4Mp4 from "../images/ghost-faq-4.mp4";
import ghostFaq4Webm from "../images/ghost-faq-4.webm";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Holy Villains collection?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            The Holy Villains are a collection of 3,333 randomly generated
            angelic GIF NFTs on the Ethereum blockchain.
          </p>
        </div>
      ),
    },
    {
      question: "How many Holy Villains are there?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>There will be 3,333 Holy Villains.</p>
        </div>
      ),
    },
    {
      question: "What is the price for only Holy Villain?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>0.0777 ETH + our discounted gas fees!</p>
        </div>
      ),
    },

    {
      question: "When is launch day?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            We will be starting our presale mint 11/27 at 3pm EST and public
            mint at 6pm EST.
          </p>
        </div>
      ),
    },

    {
      question: "How many Holy Villains can I mint?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            You will be able to mint 3 NFTs per wallet during the presale and 7
            NFTs during the public sale. Theoretically, you can have a total of
            10 of our NFTs!
          </p>
        </div>
      ),
    },
    {
      question: "How are you guys combating a gas war during minting?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            We are using an ERC1155 protocol to cut gas down by 50-90% during
            minting.
          </p>
        </div>
      ),
    },
    {
      question: "How do I mint?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            Minting will be done through our official website, to learn more
            about how to mint come and visit our discord!
          </p>
        </div>
      ),
    },
    {
      question: "Does Holy Villains have a charitable cause?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            Yes! We are donating 10% of funds raised plus a portion of royalties
            to helping build financial literacy for youth in marginalized areas.
          </p>
        </div>
      ),
    },
    {
      question: "What can I do with my Holy Villain?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            You can buy, sell, trade and collect Holy Villains, in the future
            you will also be able to use your NFT to play our play to earn video
            game!
          </p>
        </div>
      ),
    },
    {
      question: "Is the team doxxed?",
      answer: (
        <div className="feed-rte w-richtext">
          <p>
            Yes, the team is doxxed and you can check out their public profiles
            below or in our discord!
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="section faq">
      <div className="ghost-wrapper">
        <div className="ghost-slider">
          <div className="ghost-slide g1 ">
            <video
              id="ghost-img"
              className=""
              autoPlay="autoplay"
              loop
              muted
              playsInline
            >
              <source src={ghostFaq1Webm} type="video/webm" />
              <source src={ghostFaq1Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostFaq2Webm} type="video/webm" />
              <source src={ghostFaq2Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g1">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostFaq3Webm} type="video/webm" />
              <source src={ghostFaq3Mp4} type="video/mp4" />
            </video>
          </div>
          <div className="ghost-slide g2">
            <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>
              <source src={ghostFaq4Webm} type="video/webm" />
              <source src={ghostFaq4Mp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="padding-wrapper mt-0 ">
        <div className="container feed">
          <h1 className="feed-section--title mb-12 text-3xl ">
            <strong>FAQ</strong>
          </h1>
          <div className="feed-collection w-dyn-list">
            <div role="list" className="feed-list w-dyn-items">
              {faqs.map((item) => {
                return (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div id="feed" className="feed-marker"></div>
    </section>
  );
};

export default FAQ;
