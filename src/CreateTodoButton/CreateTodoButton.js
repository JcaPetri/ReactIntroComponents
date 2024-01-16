import React from 'react';
import './CreateTodoButton.css';
function CreateTodoButton({
                              setOpenModal
                                // This line receive the props setOpenModal
                              // cantClickButton, setCantClickButton
    }) {
    // let [cantClickButton, setCantClickButton] = React.useState(0);

    // console.log('La cantidad de click en el button es ' + cantClickButton);       // This show the searchValue
    // This value show the cantClickButton before the click, so allway show a value less one.
    /* The function is a component, and start with upper case
       The elements that are inside the components, are render to html
       React, create the:
                      html with the components and theirs elements and
                      the javascripts funtions
    */
    return (
        // <button className="CreateTodoButton">+</button>
        <button
            className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                        // This line changed the State to the opposite. If is true change to false and vice-versa.
                }
            }
            // onClick={
            //     (event) => {
            //         // With the state you can make a counter like n = n + 1.
            //         // To make its work, you need to set a function like n => n + 1
            //         // the reason is React render by Queues and if you make a lots of click in the button without a Queue
            //         // react update some click at the same state, so you loss some numbers. The count work wrong.
            //         // To solve this, you create a function (n => n + 1), React process the function in the queues, but never loos a number.
            //         // setCantClickButton(cantClickButton + 3);    // Here you set a fix value.
            //         setCantClickButton(cantClic => cantClic + 1);   // This function make a n = n + 1 counter.
            //         console.log('le diste click' + cantClickButton);
            //         console.log(event);
            //         console.log(event.target);
            //     }
            // }
        >+</button>
    );
}
// This is a named export
export { CreateTodoButton };