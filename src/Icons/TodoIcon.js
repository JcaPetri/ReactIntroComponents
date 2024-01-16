// This component create the real icon.
// To do that:
//              First, import React, Css, and the Icons.svg
//              Second, create an object to manipulate the svg style.
//              Third, in the function assign the values that receive from the component that call the TodoIcon.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// First, import React, Css, and the Icons.svg
import React from 'react';
import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './Images/check.svg';
    // This line Import the svg to the project and assign it to CheckSVG
import { ReactComponent as DeleteSVG } from './Images/delete.svg';
    // This line Import the svg to the project and assign it to DeleteSVG

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Second, create an object to manipulate the svg style.
// To do that assign a function to a word. This function receive a parameter and use it to assign to a Css className.
const iconTypes = {
    // This line create an object named iconTypes
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
        // This line assign to the word check, a function that receive the color, and set the className Icon-svg and the color that receive.
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
        // This line assign to the word check, a function that receive the color, and set the className Icon-svg and the color that receive.
};

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Third, in the function assign the values that receive from the component that call the TodoIcon.
function TodoIcon({ type, onClick, color }) {
    // We receive the value of the: icon type, color and the onclick
    // this function is called from CompleteIcon.js and DeleteIcon.js
    // With the information received, this function:
    //      1- First, select the sgv icon and the Css
    //      2- Second, define the method applied to the svg
    //      3- Third, define the color of the svg
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
                // Assign the general Icon-container class and the specific class using the type to form the name of the Css.
            onClick={onClick}
                // Assign the method to the svg.
        >
            {iconTypes[type](color)}
                {/*
                    This line call the object array iconTypes, send the value to seek the record or element between [].
                    after we have selected the element, we send the color to the function between ().
                 */}
        </span>

    );
}

export { TodoIcon };