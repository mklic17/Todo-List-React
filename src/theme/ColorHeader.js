import React from 'react';
import './theme.css'

// Consumer where the primary color is used
const ColorHeader = ({setColor}) => {

    function changeColor(evt) {
        setColor(evt.target.value);
    }

    return (
        <div>
            <ul className="colorButtonList">
                <li><button type="button" onClick={changeColor} value="#feff9c" className="btn btn-dark" id="yellowButton"> Yellow </button></li>
                <li><button type="button" onClick={changeColor} value="#ff7eb9" className="btn btn-dark" id="pinkButton"> Pink </button></li>
                <li><button type="button" onClick={changeColor} value="#7afcff" className="btn btn-dark" id="blueButton"> Blue </button></li>
                {/* IMPLEMENT CUSTOM COLOR IF TIME PERMITS <li><input type="color"/></li> */}
            </ul>
        </div>
    
    )
};

export default ColorHeader;