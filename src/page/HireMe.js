import React, {Fragment} from 'react';
import TextWithToolTip from "../components/TextWithTooltip";

const HireMe = () => {
    return (
      <div className="hireMe__container">
        <h3 class="hireMe__title">My career</h3>
        <p>I've been a web developer since 2018. I've done a few freelance simple projects, before joining Vizolution. There I quickly learned the basics and started creating journeys to big brands, like Santander and BNPP. </p>
        <h3 class="hireMe__title">Skills</h3>
        <div className="tiles__container">
          <div className="tiles__item">
            <h3 className="tiles__title">Front End</h3>
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

          <div className="tiles__item">
          <h3 className="tiles__title">Back End</h3>
          <ul>
            <li>C#</li>
            <li>MVC, .Net</li>
            <li>MS SQL</li>
          </ul>
          </div>

          <div className="tiles__item">
          <h3 className="tiles__title">Others</h3>
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
        <div>
          Interested in knowing more?
          <button type="button" className="button hireMe__button">Contact me</button>
        </div>
      </div>
    );
}

export default HireMe;