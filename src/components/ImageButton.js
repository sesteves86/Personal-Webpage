import React from "react";

const ImageButton = (props) => {

    return(
        <button className="imageButton__button" type="button" onClick={props.onClick}>
            <img className="imageButton__image" src={props.src} alt={props.alt} />
        </button>
    )
};

export default ImageButton;