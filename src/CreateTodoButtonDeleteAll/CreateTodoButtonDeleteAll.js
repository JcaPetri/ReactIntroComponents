import React from 'react';
function CreateTodoButtonDeleteAll({props}) {
    return (
        // <button className="CreateTodoButton">+</button>
        <button
            // className="CreateTodoButton"
            // onClick={
            //     (event) => {
            //         console.log('Click en Borrar todos los TODOs');
            //         // props.onDeleteAll;
            //     }
            // }
        >Delete All</button>
    );
}

export { CreateTodoButtonDeleteAll };