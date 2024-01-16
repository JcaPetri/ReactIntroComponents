import React from 'react';
import './TodoSearch.css'
import {TodoContext} from "../TodoContext/TodoContext";
// This code create a new component
function TodoSearch() {
    /* The function is a component, and start with upper case
       The elements that are inside the components, are render to html
       React, create the:
                      html with the components and theirs elements and
                      the javascripts funtions
    */
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);
        // This lines call the TodoContext component and load the information of the props.

    // This code save the state of TodoSearch component.
    // In the state you can get the value and save new data, so that, you need an array to store the value.
    // The first parameter get the history, and the second save the new data
    // const [searchValue, setSearchValue] = React.useState('');   // The value of the first input is empty
    // console.log('searchValue is ' + searchValue);       // This show the searchValue
    // console.log('setSearchValue is ' + setSearchValue); // This show setSearchValue is function () { [native code] }, because is a function to assign the new value to the state.

    return (
       // <input placeholder="Agrecar TODOs"
       //        className="TodoSearch"/>
        <input
            placeholder="Agregar TODOs"     // This is the suggestion message
            className="TodoSearch"          // This is the Css style
            value={searchValue}             // Define as the value of the input box is the value of the state
            // This event is assigned to an input box, so each letter that the user type, this event is triggered.
            // so when the user type L, the event is triggered the one time
            //                after LA is triggered two times, one for L and one for A.
            onChange={      // React take onChange and with addEventListening add the onchange event.
                // All event in react need a function. When the event occur, the function is triggered.
                (event) =>
                        {
                            setSearchValue(event.target.value); // This line update the State of the searchValue. So when you type one letter, the event update the state setSearchValue and after that, the user can se what is written because you set value={searchValue} as the value of the inputbox.
                            // console.log, send the event to the console.
                            // console.log('Escribiste en el TodoSearch'); // Show the message
                            // console.log(event);         // Show the event in the log with all event information
                            // console.log(event.target);  // Show the target event, is the html element
                            // console.log(event.target.value);    // Show the value of the target event, It is the value written by the user.
                        }   // End function
                    }   // End event
        />


    );
}
// This is a named export
export { TodoSearch };