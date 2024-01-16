import React from 'react';
import { TodoIcon } from './TodoIcon'
// This allow us to use the TodoIcon component

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            // This line call the TodoIcon component and pass the information. First we need to import the component => import { TodoIcon } from './TodoIcon'
            // Because It is an object, the information is passed by props.
            // The TodoIcon component has 3 props, type, color and onClick, with it create all type of icons.
            type="delete"
                // This line pass check as value Type
            color="gray"
                // This line pass gray as color
            onClick={onDelete}
                // This line pass onDelete as value onClick
        />
    );
}

export { DeleteIcon };