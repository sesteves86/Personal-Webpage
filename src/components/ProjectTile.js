import React from "react";

const ProjectTile = props => {

    return(
        <div>
            <div className="projects__container">
            <a href={props.href}>
                <img src={props.imageSrc} alt={props.imageAlt} className="projects__image" />
            </a>
            <div className="projects__textContainer">
                <a href={props.href} className="projects__textHeader">{props.title}</a>
                <p className="projects__text">{props.text}</p>
            </div>
            </div>
        </div>
    )
};

export default ProjectTile;