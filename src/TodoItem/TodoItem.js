import { CompleteIcon } from '../Icons/CompleteIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

import './TodoItem.css'

// This code create a new component
function TodoItem(props) {
    /* The function is a component, and start with upper case
       The elements that are inside the components, are render to html
       React, create the:
                      html with the components and theirs elements and
                      the javascripts funtions
       This component receive props object, you can use it inside the return section.
    */
    return (
        // <li>
        //     <span>V</span>
        //     <p>{props.text}</p>
        //     {/* {   // to insert a javascript code, it must be inside de curly bracket
        //          props.text     // get the value of the object called props.text
        //         }   // End curly bracket
        //     */}
        //     <span>X</span>
        // </li>
        <li className="TodoItem">
            <CompleteIcon
                // This line call the CompleteIcon component and pass the information. First we need to import the component => import { CompleteIcon } from '../Icons/CompleteIcon'
                // Because It is an object, the information is passed by props.
                completed={props.completed}
                onComplete={props.onComplete}
            />

            {/*
          <span
              className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
              onClick={props.onComplete}
          >
            V
          </span>
          */}
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
          {/*
            <span className="Icon Icon-delete"
                  onClick={props.onDelete}
            >
            X
          </span>
          */}
            <DeleteIcon
                // This line call the DeleteIcon component and pass the information. First we need to import the component => import { DeleteIcon } from '../Icons/DeleteIcon'
                // Because It is an object, the information is passed by props.
                onDelete={props.onDelete}
            />
        </li>
    );
}
// This is a named export
export { TodoItem };