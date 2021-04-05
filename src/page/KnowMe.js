import React, {Fragment} from 'react';
import Skills from "./Skills";
import ImageButton from "../components/ImageButton";

const KnowMe = () => {
    return (
      <div className="knowMe__container">
        <section className="knowMe__section">
          <h3 className="knowMe__title">My career</h3>
          <p>I've been a web developer since 2018. I've done a few freelance simple projects, before joining Vizolution. There I quickly learned the basics and started creating journeys to big brands, like Santander and BNPP. </p>
        </section>

        <section className="knowMe__section">
          <h3 className="knowMe__title">Skills</h3>
          <Skills />
        </section>

        <section className="knowMe__section">
          <p>Interested in knowing more?</p>
          <div className="knowMe__onlinePresence">
            <ImageButton 
              src="githubLogo.png"
              alt="github"
              onClick={() => {window.open("https://github.com/sesteves86/"); }}
            />
            <ImageButton 
              src="youtubeLogo.png"
              alt="youtube"
              onClick={() => {window.open("https://www.youtube.com/channel/UClrwgPs-ZPsU05Uge04sRMg"); }}
            />
            <ImageButton 
              src="bloggerLogo.png"
              alt="blogger"
              onClick={() => {window.open("https://saeprogramming.blogspot.com/"); }}
            />
            <button type="button" className="button knowMe__button" onClick={() => {window.location.replace("./contact")}}>Contact me</button>
          </div>
        </section>
      </div>
    );
}

export default KnowMe;