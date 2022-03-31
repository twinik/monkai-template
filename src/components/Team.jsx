import * as React from "react";
import "./Team.css";
import sonny from "./../images/sonny.gif";
import elfarra from "./../images/elfarra.gif";
import wixted from "./../images/wixted.gif";
import brains from "./../images/brains.gif";
import brito from "./../images/brito.gif";
import wish from "./../images/wish.gif";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaTiktok, FaGithub, FaWpforms } from "react-icons/fa";

const Team = () => {
  const member = [
    {
      img: wish,
      name: "Alexander Morgan (Wish)",
      description:
        "Is the Founder of Holy Nft Discord, and a young investor from Brooklyn NYC. He grew up in a rough neighborhood, this helps him remain humble to his beginnings. He runs a network of over 2 million followers across Social Media. When he’s not being a discord admin he’s probably spending his time trading options on meme based stocks. Wish’s daily motivation is the goal / hope to be able to help retire his father from his 9-5 job.",
      twitter: "https://twitter.com/wishboy999?s=21",
      instagram: "https://instagram.com/wishlist_18",
      tiktok: "https://vm.tiktok.com/TTPd2MnN2F/",
    },
    {
      img: sonny,
      name: "Sonny Fazio (RealTalkStocks)",
      description:
        "Is an entrepeneur/content creator born and raised in Boston, Mass with over 100,000 followers on his tiktok @realtalkstocks.  Sonny has always had a passion for helping others become financially literate which is why he founded this project.  He’ll be a large part in the community building and content creation for HolyNFT.",
      instagram: "https://www.instagram.com/realtalkstocks/",
      tiktok: "https://www.tiktok.com/@realtalkstocks",
    },
    {
      img: elfarra,
      name: "Sam Elfarra",
      description:
        "With a background in finance and political science, Sam has worked on multiple different NFT projects all fostering humanitarian based objectives. He has worked as a blockchain consultant and in private equity to help grow projects to fruition. When he’s not playing basketball, he’s working to better his skills as a developer and helping members feel more comfortable in the community.",
      twitter: "https://twitter.com/melfarra123/",
      instagram: "https://www.instagram.com/melfarra123/?utm_medium=copy_link",
      discord: "https://discordapp.com/users/@melfarra#0123/",
      tiktok: "https://vm.tiktok.com/TTPd26HVD2/",
    },
    {
      img: wixted,
      name: "Dixon Wixted",
      description:
        "Content Creator/Entrepreneur based out of Rhode Island, currently studying Digital Media Production and Finance at New England Institute of Technology. Works primarily in Social Media Marketing, running a network of accounts amassing over 400k followers.",
      instagram: "https://www.instagram.com/dj.wixted/",
      tiktok: "https://www.tiktok.com/@dj.wixted?lang=en",
    },
    {
      img: brains,
      name: "Joshua Kezzer (Brains)",
      description:
        "Lead Developer here at Holy Heroes NFTs. I'm responsible for technology and security at Holy Heroes, ensuring that our launches run smoothly, process generative art, and most importantly keeping our users happy. Born and raised in Los Angeles, and have been into tech as far back as I can remember. From there I built VFXBrain.com and that's what really got me into entrepreneurship. Since then, I've founded multiple companies and have worked in tech for the past decade, working with companies such as Paramount Studios and Columbia Pictures",
      instagram: "https://instagram.com/vfxbrain",
      github: "https://github.com/neurologist",
      discord: "https://discord.gg/yBfrP4YVdU",
      docs: "https://forms.gle/Udyu1pE3xWpkoFVw7",
    },
    {
      img: brito,
      name: "Marcos Brito",
      description:
        "Lead Artist at HolyVerse, Brito has worked for game and VFX industry for 4 years, he has a lot of experience in modeling, worked in companies like Kitbash3D and Dekogon Studios. With experience to manage a team, he can create any kind of art.",
      twitter: "https://twitter.com/MarcosBritoJr/",
    },
  ];

  return (
    <section className="team">
      <div className="team-container container pb-6 pt-6 md:pt-16">
        <h2 className="text-center mb-8">
          <strong>Team Members </strong>
        </h2>
        {member.map((item, index) => {
          return (
            <div key={item.name} className="team-card-wrapper p-6 mb-6">
              <div className="team-card  pt-32 relative text-center grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4 justify-center items-center md:items-start md:justify-evenly">
                <div className="team-card-image text-center m-auto md:-m-0 ">
                  <img src={item.img} alt={item.name} className="" />
                </div>
                <div className="team-card-text h-full relative md:col-span-3 lg:col-span-3 md:ml-4 px-6 pt-2 pb-12 md:pb-6">
                  <h3 className="team-card-name  md:text-left text-base  sm:text-sm md:text-md lg:text-lg xl:text-lg ">
                    {item.name}
                  </h3>
                  <p className="team-card-description text-left text-base sm:text-sm md:text-md lg:text-lg xl:text-lg leading-tight lg:leading-tight">
                    {item.description}
                  </p>
                  {/* SOCIALS */}
                  <div className="team-socials flex relative right-0 justify-end gap-2 items-end mt-3 md:mt-6">
                    {item.twitter ? (
                      <a href={item.twitter}>
                        <BsTwitter />
                      </a>
                    ) : null}
                    {item.instagram ? (
                      <a href={item.instagram}>
                        <BsInstagram />
                      </a>
                    ) : null}
                    {item.discord ? (
                      <a href={item.discord}>
                        <FaDiscord />
                      </a>
                    ) : null}
                    {item.tiktok ? (
                      <a href={item.tiktok}>
                        <FaTiktok />
                      </a>
                    ) : null}
                    {item.github ? (
                      <a href={item.github}>
                        <FaGithub />
                      </a>
                    ) : null}
                    {item.docs ? (
                      <a href={item.docs}>
                        <FaWpforms />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
