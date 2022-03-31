import React, { useState } from "react"
import './Feed.css'
import ghostSlider1Mp4 from '../images/ghost-slider-1.mp4'
import ghostSlider2Mp4 from '../images/ghost-slider-2.mp4'
import ghostSlider3Mp4 from '../images/ghost-slider-3.mp4'
import ghostSlider4Mp4 from '../images/ghost-slider-4.mp4'
import ghostSlider1Webm from '../images/ghost-slider-1.webm'
import ghostSlider2Webm from '../images/ghost-slider-2.webm'
import ghostSlider3Webm from '../images/ghost-slider-3.webm'
import ghostSlider4Webm from '../images/ghost-slider-4.webm'

const Feed = () => {

    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
    };

    const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
    };

    const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
        displayScrollElement(el);
        } else if (elementOutofView(el)) {
        hideScrollElement(el)
        }
    })
    }

    window.addEventListener("scroll", () => { 
    handleScrollAnimation();
    });


    const missions = [
        {
            icon: 'heart',
            text: 'Holy NFT is striving to create a positive and active community.'
        },
        {
            icon: 'sword',
            text: 'We will help provide resources to marginalized communities in order to help them attain financial literacy.'
        },
        {
            icon: 'coin',
            text: 'While also working with local governments and school boards to foster better educational material to the public.'
        },
        {
            icon: 'star',
            text: 'Our metaverse is coming, members of our community can take part in a Mario inspired world in order to grow their digital assets.'
        },
        {
            icon: 'gem',
            text: 'More NFT drops will come in the future, as we build out the HolyVerse.'
        },
        {
            icon: 'cup',
            text: 'Backed by numerous influencers who are also supporting our cause, we have a cumulative reach of nearly 10 million users. '
        },
    ]
    const [hover, setHover] = useState({1: false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false})
    const handleHover = index => {
        setHover({...hover, [index]: true })   
        console.log(hover)
    }

  return(
    <section className="section feed">
    <div className="ghost-wrapper">
        <div className="ghost-slider">
            <div className="ghost-slide g1">
                <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>  
                    <source src={ghostSlider1Webm} type="video/webm" />  
                    <source src={ghostSlider1Mp4} type="video/mp4" />  
                </video>
            </div>
            <div className="ghost-slide g2" >
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
            <div className="ghost-slide g2" >
                <video id="ghost-img" autoPlay="autoplay" loop muted playsInline>  
                    <source src={ghostSlider4Webm} type="video/webm" />  
                    <source src={ghostSlider4Mp4} type="video/mp4" />  
                </video>
            </div>
        </div>
    </div>
    <div className="padding-wrapper">
        <div className="container feed">
            <div id="mission" className="feed-rte alt w-richtext">
                <h2 className="text-center pb-4"><strong>Mission</strong></h2>

                {missions.map((mission, index) => {
                    return(
                        <div key={`${mission} ${index} `} className={`mission-item flex ${hover[index] ? 'justify-start' : 'justify-center'}`}>
                        <span onMouseOver={() => {handleHover(index)}} className={`${mission.icon} mission-icon `}></span>
                        <p className={`mission-description mission-description-${mission.icon} ${hover[index] ? 'block' : 'hidden'}`}>{mission.text}</p>
                        </div>

                    )
                })}
                    
                    
                    {/* 

                    <br />
                    <p>Marginalized communities have a 35% less chance of graduating than affluent communities </p>
                    <p>Our goal is to level the playing field. We intend on providing educational resources to these communities. </p>
                    <p>Only 7.4% of Black and brown students and 7.8% of low-income students have access to a required stand-alone personal finance course for graduation. </p>
                    <p>This lack of access to financial education underscores how little attention is paid to personal finance as a critical component of students’ long-term outcomes in life.</p> */}
{/*                 <p>
                    The well-recognizable Ghost logo was originally illustrated by Cena aka LordWave (IG: <a href="http://www.instagram.com/lordwave">@lordwave</a>), creative director and co-founder of the globally recognized streetwear
                    brand<strong> </strong><a href="http://www.pinkdolphinonline.com">Pink+Dolphin</a><strong> </strong>when he was still in high school. The Ghost has made its way onto everything from billboards to shoe collaborations in
                    the last 13 years.
                </p>
                <p>
                    Thru Rare Ghost Club, we are now releasing this rare collectible experience into the metaverse for fellow NFT enthusiasts. Every RGC Ghost is a unique 1-of-1 image made up of over 263 possible traits including different
                    bodies, teeth, eyewear, headwear, tattoos and more.
                </p>
                <h6><strong>Every Ghost is rare, but some are rarer than others.</strong></h6> */}
            </div>
        </div>
    </div>
    <div id="feed" className="feed-marker"></div>{/* 
    <img
        src={require(`../images/ghost-feed-bg.png`)} 
        alt="Ghost Feed BG"
        className="bg-ghost"
    />
    <img
        src={require(`../images/ghost-feed-bg.png`)} 
        alt="Ghost Feed BG"
        className="bg-ghost"
    /> */}
</section>

)}

export default Feed
