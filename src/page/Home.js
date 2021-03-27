import React from 'react';
import RainOnImage from "./../components/RainOnImage/RainOnImage";
import TextWithToolTip from "../components/Molecules/TextWithTooltip";

const Home = () => {
    return (
      <div>
        <RainOnImage />
        <h3>Who am I?</h3>
        <p>I'm a web developer with over 2 years of professional experience of working in an Agile team.</p>
        <p>Offering my front-end skills to create and improve dynamic and responsive web pages, with the possibility to create reports and BE code.</p>
        <p>Looking to keep increasing my value as a web developer</p>

        <h3>Technical Skills</h3>
        <div>
          <div>
            <p>Front End</p>
            <ul>
              <li>
                <TextWithToolTip 
                  pText="HTML"
                  tText="Over 2 years experience"
                />
              </li>
              <li>
                <TextWithToolTip 
                  pText="CSS, ITCSS, SCSS"
                  tText="Over 2 years experience"
                />
              </li>
              <li>
                <TextWithToolTip 
                  pText="JS"
                  tText="Over 2 years experience"
                />
                , Knockout
              </li>
              <li>
                <TextWithToolTip 
                  pText="CSS, ITCSS, SCSS"
                  tText="Over 2 years experience"
                />
                , Vue
              </li>
              <li>Unit Testing JS with Jest</li>
            </ul>
          </div>

          <p>Back End</p>
          <ul>
            <li>C#</li>
            <li>MVC, .Net</li>
            <li>MS SQL</li>
          </ul>

          <p>Others</p>
          <ul>
            <li>
              <TextWithToolTip 
                pText="Git, Source control"
                tText="Over 2 years experience"
              />
            </li>
            <li>
              <TextWithToolTip 
                pText="NPM"
                tText="Over 2 years experience"
              />
            </li>
            <li>
              <TextWithToolTip 
                pText="MS Office"
                tText="Over 2 years experience"
              />
            </li>
            <li>Paint.NET (Codelab)</li>
          </ul>
          
        </div>
      </div>
    );
}

export default Home;