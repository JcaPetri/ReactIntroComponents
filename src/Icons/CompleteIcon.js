import React from 'react';
import { TodoIcon } from './TodoIcon'
    // This allow us to use the TodoIcon component
function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon
            // This line call the TodoIcon component and pass the information. First we need to import the component => import { TodoIcon } from './TodoIcon'
            // Because It is an object, the information is passed by props.
            // The TodoIcon component has 3 props, type, color and onClick, with it create all type of icons.
            type="check"
                // This line pass check as value Type
            color={completed ? 'green' : 'gray'}
                // This line set the color green if the completed is true, otherwise set it us gray.
            onClick={onComplete}
                // This line pass onComplete as value onClick
        />

    );
}

export { CompleteIcon };