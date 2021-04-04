import React from "react";
import TextWithToolTip from "../components/TextWithTooltip";

const Skills = () => {

    return (
        <div className="skillTiles__container">
          <div className="skillTiles__item">
            <h3 className="skillTiles__title">Front End</h3>
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
                  pText="React"
                  tText="1 year experience"
                />
                , Vue
              </li>
              <li>Unit Testing JS with Jest</li>
            </ul>
          </div>

          <div className="skillTiles__item">
          <h3 className="skillTiles__title">Back End</h3>
          <ul>
            <li>C#</li>
            <li>MVC, .Net</li>
            <li>MS SQL</li>
          </ul>
          </div>

          <div className="skillTiles__item">
          <h3 className="skillTiles__title">Others</h3>
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
        
    )
};

export default Skills;