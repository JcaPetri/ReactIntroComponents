import React from 'react';
import './TodoCounter.css';
import {TodoContext} from "../TodoContext/TodoContext";

// This code create a new component
function TodoCounter() {
    const {
        totalTodos: total,
        completedTodos: completed
            } = React.useContext(TodoContext);
    // const tot = props.total;
    // const com = props.complete;
    /* The function is a component, and start with upper case
       The elements that are inside the components, are render to html
       React, create the:
                      html with the components and theirs elements and
                      the javascripts funtions
    */
    return (
        <h1>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    );
}
// This is a named export
export { TodoCounter };