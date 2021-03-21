import React, {Fragment} from 'react';

const TextWithToolTip = ({pText, tText}) => {


    return (
        <div className="tooltip2">
            <b>{pText}</b>
            <span className="tooltipText2">{tText}</span>
        </div>
    );
}

export default TextWithToolTip;